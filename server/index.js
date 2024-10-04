const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const {
  MongoClient,
  ServerApiVersion,
  Timestamp,
  ObjectId,
} = require("mongodb");

// config
require("dotenv").config();
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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r6s2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const database = client.db("lifeline");
    const appointmentCollection = database.collection("Appointment");
    const presaipationCollection = database.collection("Presaipation");

    // await client.connect();
    // Send a ping to confirm a successful connection


    // ----------------this is the doctor handile api section ----------------------------------------
app.get('/apppionment-request',async(req,res)=>{
const email={doctorEmail:req.query.email}
const result=await appointmentCollection.find(email).toArray()
res.send(result)
})


app.patch(('/appionment-approve/:id'),async(req,res)=>{
  const id=req.params.id

  const query={_id:new ObjectId(id)}
  const updates={
    $set:{
      status:"approved"
    }
  }

  const result=await appointmentCollection.updateOne(query,updates)
  res.send(result)
})
app.patch(('/appionment-reject/:id'),async(req,res)=>{
  const id=req.params.id

  const query={_id:new ObjectId(id)}
  const updates={
    $set:{
      status:"rejected"
    }
  }

  const result=await appointmentCollection.updateOne(query,updates)
  res.send(result)
})

app.get('/approve-appionment',async(req,res)=>{
const status={status:'approved',doctorEmail:req.query.email}

const result=await appointmentCollection.find(status).toArray()
res.send(result)
})
app.get('/patient-deatils/:id',async(req,res)=>{
const id=req.params.id
const query={_id:new ObjectId(id)}
const result=await appointmentCollection.findOne(query)
res.send(result)
})
app.get('/patients-deatils/:id',async(req,res)=>{
const id=req.params.id
const query={_id:new ObjectId(id)}
const result=await appointmentCollection.findOne(query)
res.send(result)
})

app.post('/add-presaipation',async(req,res)=>{
  const presaipationInfo=req.body
  const result=await presaipationCollection.insertOne(presaipationInfo)
 res.send(result)
})

app.get('/show-prescription',async(req,res)=>{
const query={patientEmail:req.query.email, doctorEmail:req.query.dremail}

const result=await presaipationCollection.findOne(query)
res.send(result)
})

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// test
app.get("/", (req, res) => {
  res.send("lifeline server is Running");
});

app.listen(port, () => {
  console.log(`lifeline server is running on port: ${port}`);
});
