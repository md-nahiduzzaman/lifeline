const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const nodemailer = require('nodemailer');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const { createServer } = require('http');
const { Server } = require("socket.io");
require("dotenv").config();
const stripe = require("stripe")(process.env.PAYMENT_GETWAY_KEY);

const app = express();
const port = process.env.PORT || 5000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173/",
      "http://localhost:5174/",
      "https://lifeline-omega.vercel.app",
      "http://localhost:5175/",
      "https://hospital-management-4e9fc.web.app"

    ],
    credentials: true,
  }
});
console.log(io)

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://lifeline-omega.vercel.app",
      "http://localhost:5175",
      "https://hospital-management-4e9fc.web.app"
    ],
    credentials: true,
  })
);


app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r6s2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Nodemailer: if admin change any data of a doctor an email
// will go automatically to the doctor
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nayemshahadat581@gmail.com',
    pass: 'bpij osjx hofk eaaj',
  },

});


async function run() {
  try {


    //  it is Sanim's collection
    const database = client.db("lifeline");
    const appointmentCollection = database.collection("Appointment");
    const presaipationCollection = database.collection("Presaipation");
    const HservoceCardCollection = database.collection("Hservice-card");
    const HSBookingCollection = database.collection("HS-Booking");
    const SerivcesCollection = database.collection("service-card");
    const paymentHistoryCollection = database.collection("payment-history");
    // end of sanim collection


    // Here is socket data base
    const messagesCollection = client.db("lifeline").collection("socket");
    const adminHistoryCollection = client.db("lifeline").collection("doctor-payment")
    const userCollection = client.db("lifeline").collection("users");
    const bedCollection = client.db("lifeline").collection("beds");
    app.get("/users", async (req, res) => {
      const role = 'doctor'
      try {
        const result = await userCollection.find({ role }).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: error.message });
      }
    });



    // Admin routes start

    app.post('/admin_add_doctor', async (req, res) => {
      const info = req.body;
      console.log(info)
      const result = await userCollection.insertOne(info)
      res.send(result)
    })
    app.put('/admin-change_status/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const data = req.body
      console.log("is ", data.condition)

      const options = { upsert: true }

      const status = {
        $set: {
          status: data.condition
        }
      }
      const result = await bedCollection.updateOne(query, status, options)
      res.send(result)
    })


    app.post('/doctor-payment', async (req, res) => {
      const info = req.body;
      const result = await adminHistoryCollection.insertOne(info)
      res.send(result)
    })


    app.get('/get_doctor_payment/:email', async (req, res) => {
      const email = req.params;

      const query = { email: email.email }

      const result = await adminHistoryCollection.find(query).toArray()

      res.send(result)
    })


    app.get('/admin-all-bed', async (req, res) => {
      const result = await bedCollection.find().toArray()
      res.send(result)
    })
    app.get('/admin/:id', async (req, res) => {
      const id = req.params.id;
      console.log("it is id", id)
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.findOne(query)
      res.send(result)
    })
    app.put('/admin-edit-doctor/:id', async (req, res) => {
      const id = req.params.id
      const update = req.body;
      console.log("shahadat ", update)
      const query = { _id: new ObjectId(id) }
      const options = { upsert: true }

      const updateDoc = {
        $set: {

          specialty: update.speciality,
          total_patient_checkups: update.checked_patient,
          experience: update.experience,
          visit_charge: update.visit,
          "schedule.days": update.date,
          "schedule.time": update.time,
          short_description: update.short_des,
          description: update.long_des,
          image_url: update.photo
        }
      }
      const result = await userCollection.updateOne(query, updateDoc, options)
      if (result.modifiedCount > 0) {
        const mailOptions = {
          from: 'nayemshahadat581@gmail.com',
          to: update.email, // Doctor's email should be provided in the frontend data or fetched from the database
          subject: 'Your Profile Information Has Been Updated',
          text: `Dear ${update.specialty},\n\nYour profile information has been successfully updated.\n\nThank you.\n\nBest Regards,\nHospital Management Team`,
          html: `      
            <p>Your profile information has been successfully updated. Please go in your profile and check. if
            any thing wrong update it </p>          
          `,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
            res.status(500).send({ message: 'Doctor profile updated, but failed to send email notification.' });
          } else {
            console.log('Email sent: ' + info.response);
            res.send({ message: 'Doctor profile updated successfully and email notification sent.' });
          }
        });
      } else {
        res.status(404).send({ message: 'Doctor not found or no changes made.' });
      }
    })


    app.delete('/admin-delete-doctor/:id', async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) }

      const result = await userCollection.deleteOne(query)
      res.send(result)
    })

    app.get('/get_allUsers',async (req,res)=>{
         const result=await userCollection.find().toArray()
         res.send(result)
    })
    // here is message system with socket

    
    app.get('/messagecollection', async (req, res) => {
      // Get sender and receiver email from query parameters
      const { senderEmail, receiverEmail } = req.query;
    
      try {
        
        const query = {
          $or: [
            { Senderemail: senderEmail, reciverEmail: receiverEmail },
            { Senderemail: receiverEmail, reciverEmail: senderEmail },
          ],
        };
    
        
        const messages = await messagesCollection.find(query).sort({ time: 1 }).toArray();
    
        res.send(messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).send({ message: "Failed to retrieve messages." });
      }
    });
    

    app.post('/postMessage', async (req,res)=>{
        const info=req.body;
        
        const result= await messagesCollection.insertOne(info)
        res.send(result)
    })

    app.delete('/deleteMessage/:id',async (req,res)=>{
       const id=req.params.id;
       const query={_id: new ObjectId(id)}

       const result=await messagesCollection.deleteOne(query)
       res.send(result)
    })

    app.get('/find_admin', async (req,res)=>{
        const query={role:'admin'}
        
        const result =await userCollection.find(query).toArray()
        res.send(result)
    })


    app.post('/user_post', async (req,res)=>{
       const info=req.body;

       const query={email:info.email}
       
       const find=await userCollection.findOne(query)
       if(!find)
       {
        const result=await userCollection.insertOne(info)
        res.send(result)
       }

       else{
        res.send('user already exist')
       }
       
    })
    
    // here End of Admin collection


    // Connect the client to the server	(optional starting in v4.7)
    // const userCollection = client.db("lifeline").collection("users");


    // await client.connect();
    // Send a ping to confirm a successful connection
    app.get("/doctors-all", async (req, res) => {
      const role = 'doctor'
      try {
        const result = await userCollection.find({ role }).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: error.message });
      }
    });
    // ----------------this is the doctor handile api section ----------------------------------------
    app.get('/apppionment-request', async (req, res) => {
      const email = { doctorEmail: req.query.email }
      const result = await appointmentCollection.find(email).toArray()
      res.send(result)
    })


    app.patch(('/appionment-approve/:id'), async (req, res) => {
      const id = req.params.id
      
      const query = { _id: new ObjectId(id) }
      const updates = {
        $set: {
          status: "approved"
        }
      }

      const result = await appointmentCollection.updateOne(query, updates)
      res.send(result)
    })
    app.patch(('/appionment-reject/:id'), async (req, res) => {
      const id = req.params.id

      const query = { _id: new ObjectId(id) }
      const updates = {
        $set: {
          status: "rejected"
        }
      }

      const result = await appointmentCollection.updateOne(query, updates)
      res.send(result)
    })

    app.get('/approve-appionment', async (req, res) => {
      const status = { status: 'approved', doctorEmail: req.query.email }

      const result = await appointmentCollection.find(status).toArray()
      res.send(result)
    })
    app.get('/patient-deatils/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await appointmentCollection.findOne(query)
      res.send(result)
    })
    app.get('/patients-deatils/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await appointmentCollection.findOne(query)
      res.send(result)
    })

    app.post('/add-presaipation', async (req, res) => {
      const presaipationInfo = req.body
      const result = await presaipationCollection.insertOne(presaipationInfo)
      res.send(result)
    })

    app.get('/show-prescription', async (req, res) => {
      const query = { patientEmail: req.query.email, doctorEmail: req.query.dremail }

      const result = await presaipationCollection.findOne(query)
      res.send(result)
    })

    app.get('/appionment-today', async (req, res) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const tomorrow = new Date()
      tomorrow.setHours(24, 0, 0, 0)

      const query = {
        doctorEmail: req.query.email,
        date: { $gte: today, $lt: tomorrow }
      };

      const todayAppionments = await appointmentCollection.countDocuments(query)

      const pending = { status: 'pending', doctorEmail: req.query.email }

      const pendingappionment = await appointmentCollection.countDocuments(pending)

      const allAppionments = await appointmentCollection.countDocuments({ doctorEmail: req.query.email })

      res.send({ todayAp: todayAppionments, pendingAp: pendingappionment, allAp: allAppionments })
    })

    app.get('/hsService-card', async (req, res) => {

      const result = await HservoceCardCollection.find().toArray()
      res.send(result)

    })

    app.get('/serviceDs/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await HservoceCardCollection.findOne(query)
      res.send(result)
    })

    app.post('/Booking-HS', async (req, res) => {
      const bookingInfo = req.body
      const result = await HSBookingCollection.insertOne(bookingInfo)
      res.send(result)
    })
    app.get('/services-cards', async (req, res) => {

      const result = await SerivcesCollection.find().toArray()
      res.send(result)

    })
    app.get('/package-price/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await SerivcesCollection.findOne(query)
      res.send(result)
    })

    app.post("/create-payment-intent", async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100)

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ['card']
      })

      res.send({
        clientSecret: paymentIntent.client_secret
      })
    })
    app.post('/payments-history', async (req, res) => {
      const paymentInfo = req.body
      const result = await paymentHistoryCollection.insertOne(paymentInfo)
      res.send(result)
    })

    app.get('/UP-history', async (req, res) => {
      const query = { userEmail: req.query.email }
      const result = await paymentHistoryCollection.find(query).toArray()
      res.send(result)
    })
    app.post('/added-appionments', async (req, res) => {
      const patientInfo = req.body
      const result = await appointmentCollection.insertOne(patientInfo)
      res.send(result)
    })

    app.get('/user-role', async (req, res) => {
      const query = { email: req.query.email }
      const result = await userCollection.findOne(query)
      if (!result) {
        return res.send({})
      }
      res.send(result)
    })

    app.patch('/user-status-upadate', async (req, res) => {
      const email = req.query.email
      const query = { email: email }
      console.log(query)
      const upadateDc = {
        $set: { status: 'subscribe' }
      }
      const result = await userCollection.updateOne(query, upadateDc)
      console.log(result)
      res.send(result)
    })

    app.get('/my-appiontments',async(req,res)=>{
      const query={patientEmail:req?.query?.email}
      const result =await appointmentCollection.find(query).toArray()
      res.send(result)
    })
    app.delete('/appoinment-delete/:id',async(req,res)=>{
      const id=req.params.id
      const query={_id:new ObjectId(id)}
      const result=await appointmentCollection.deleteOne(query)
      res.send(result)
    })

    app.get('/my-prescriptions',async(req,res)=>{
      const query={patientEmail:req.query.email}
      console.log(query)
      const result=await presaipationCollection.find(query).toArray()
      res.send(result)
    })

    app.get('/see-prescription/:id',async(req,res)=>{
      const id=req.params.id
      const query={_id:new ObjectId(id)}
      const result=await presaipationCollection.findOne(query)
      res.send(result)
    })


    app.get('/all-dr-card',async(req,res)=>{
       const query={role:'doctor'}
      const result=await userCollection.find(query).toArray()
      res.send(result)
    })
    // app.get('/patient-see-prescription-datils', async (req, res) => {
    //   const query = { patientEmail: req.query.email}

    //   const result = await presaipationCollection.findOne(query)
    //   res.send(result)
    // })

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {

  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("lifeline server is Running");
});

server.listen(port, () => {
  console.log(`Lifeline server is running on port: ${port}`);
});
