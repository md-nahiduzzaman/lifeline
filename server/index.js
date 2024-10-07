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
           
          specialty:update.speciality,
          total_patient_checkups: update.checked_patient,
          experience: update.experience,
          visit_charge: update.visit,
          "schedule.days": update.date,
          "schedule.time": update.time,
          short_description: update.short_des,
          description:update.long_des,
          image_url:update.photo
        }
      }
      const result=await userCollection.updateOne(query,updateDoc,options)
      if (result.modifiedCount > 0) {
        const mailOptions = {
          from: 'nayemshahadat581@gmail.com',
          to:update.email, // Doctor's email should be provided in the frontend data or fetched from the database
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

    console.log("Pinged your deployment. Successfully connected to MongoDB!");
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
