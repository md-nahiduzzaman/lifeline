const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const stripe = require("stripe")(process.env.PAYMENT_GETWAY_KEY);


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
    const userCollection = client.db("lifeline").collection("users");
    const database = client.db("lifeline");
    const appointmentCollection = database.collection("Appointment");
    const presaipationCollection = database.collection("Presaipation");
    const HservoceCardCollection = database.collection("Hservice-card");
    const HSBookingCollection = database.collection("HS-Booking");
    const SerivcesCollection = database.collection("service-card");
    const paymentHistoryCollection = database.collection("payment-history");

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

app.get('/appionment-today',async(req,res)=>{
  const today=new Date()
  today.setHours(0, 0, 0, 0)

  const  tomorrow=new Date()

  tomorrow.setHours(24, 0, 0, 0)

  const todayAppionments=await appointmentCollection.countDocuments({
admittedDate:{$gte:today,$lt:tomorrow}
  })
 

  const pending={status:"pending"}

  const pendingappionment=await appointmentCollection.countDocuments(pending)

  const allAppionments=await appointmentCollection.estimatedDocumentCount()

  res.send({todayAp:todayAppionments,pendingAp:pendingappionment,allAp:allAppionments})
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
app.get('/services-cards',async(req,res)=>{

const result=await SerivcesCollection.find().toArray()
res.send(result)

})
app.get('/package-price/:id',async(req,res)=>{
  const id=req.params.id
  const query={_id:new ObjectId(id)}
  const result=await SerivcesCollection.findOne(query)
  res.send(result)
})

app.post("/create-payment-intent", async (req, res) => {
  const {price} = req.body;
  const amount=parseInt(price*100)
  const paymentIntent = await stripe.paymentIntents.create({
    amount:amount,
    currency: "usd",
    payment_method_types:['card']
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})
app.post('/payments-history',async(req,res)=>{
  const paymentInfo=req.body
  const result=await paymentHistoryCollection.insertOne(paymentInfo)
  res.send(result)
})

app.get('/UP-history',async(req,res)=>{
  const query={email:req.query.email}
const result=await paymentHistoryCollection.find(query).toArray()
res.send(result)
})
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Optionally close the connection
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("lifeline server is Running");
});

app.listen(port, () => {
  console.log(`lifeline server is running on port: ${port}`);
});
