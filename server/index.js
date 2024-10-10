const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const nodemailer = require('nodemailer');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

// config
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://lifeline-omega.vercel.app",
      "http://localhost:5175"
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
console.log("sfsdfs", process.env.DB_USER)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r6s2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
    
    app.put('/admin-change_status/:id', async (req,res)=>{
       const id=req.params.id;
       const query= {_id:new ObjectId(id)}
       const data=req.body
       console.log("is ",data.condition)
       
       const options={upsert:true}

       const status={
        $set:{
           status:data.condition
        }
       }
      const result=await bedCollection.updateOne(query,status,options)
      res.send(result)
    })


    app.get('/admin-all-bed',async (req,res)=>{
        const result=await bedCollection.find().toArray()
        res.send(result) 
    })
    app.get('/admin/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id)
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


    app.delete('/admin-delete-doctor/:id',async (req,res)=>{
         const id=req.params.id;

         const query= {_id:new ObjectId(id)}

         const result=await userCollection.deleteOne(query)
         res.send(result)
    })


    // Connect the client to the server	(optional starting in v4.7)
    // const userCollection = client.db("lifeline").collection("users");
    const database = client.db("lifeline");
    const appointmentCollection = database.collection("Appointment");
    const presaipationCollection = database.collection("Presaipation");
    const HservoceCardCollection = database.collection("Hservice-card");
    const HSBookingCollection = database.collection("HS-Booking");

    // await client.connect();
    // Send a ping to confirm a successful connection

    // --------------------------------this is the doctort and user api ---------------------------------------



    app.get("/users", async (req, res) => {
      const role = req.query.role || "doctor";
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

      const todayAppionments = await appointmentCollection.countDocuments({
        admittedDate: { $gte: today, $lt: tomorrow }
      })


      const pending = { status: "pending" }

      const pendingappionment = await appointmentCollection.countDocuments(pending)

      const allAppionments = await appointmentCollection.estimatedDocumentCount()

      res.send({ todayAp: todayAppionments, pendingAp: pendingappionment, allAp: allAppionments })
    })

app.get('/hsService-card',async(req,res)=>{

const result=await HservoceCardCollection.find().toArray()
res.send(result)

})

app.get('/serviceDs/:id',async(req,res)=>{
const id=req.params.id
const query={_id:new ObjectId(id)}
const result=await HservoceCardCollection.findOne(query)
res.send(result)
})

app.post('/Booking-HS',async(req,res)=>{
  const bookingInfo=req.body
  const result=await HSBookingCollection.insertOne(bookingInfo)
  res.send(result)
})

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

app.listen(port, () => {
  console.log(`lifeline server is running on port: ${port}`);
});
