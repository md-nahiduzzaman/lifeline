const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r6s2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // collections
    const userCollection = client.db("lifeline").collection("users");

    // get user by role - doctor
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

    // await client.connect(); // Ensure this is uncommented

    console.log("Pinged your deployment. Successfully connected to MongoDB!");
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
