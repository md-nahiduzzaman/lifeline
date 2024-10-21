const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// config
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
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

// verify jwt token middleware
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).send({ message: "Unauthorized Access" });
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).send({ message: "Unauthorized Access" });
      }
      console.log(decoded);
      req.user = decoded;
      next();
    });
  }
};

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
    // nahid collection start
    const usersCollection = client.db("lifeline").collection("users");
    const blockUsersCollection = client.db("flowHr").collection("blocks");
    // nahid collection end
    // ----------------------------------------
    // samin collection start
    const appointmentCollection = database.collection("Appointment");
    const presaipationCollection = database.collection("Presaipation");
    // samin collection end
    // ----------------------------------------
    // nayem collection start
    const database = client.db("lifeline");
    const HservoceCardCollection = database.collection("Hservice-card");
    const HSBookingCollection = database.collection("HS-Booking");
    // nayem collection ena

    // verify admin middleware
    const verifyAdmin = async (req, res, next) => {
      console.log("admin middleware");
      const user = req.user;
      const query = { email: user?.email };
      const result = await usersCollection.findOne(query);
      console.log(result?.role);
      if (!result || result?.role !== "Admin")
        return res.status(401).send({ message: "Unauthorized Access!!" });
      next();
    };

    // verify dr middleware
    const verifyHr = async (req, res, next) => {
      console.log("dr middleware");
      const user = req.user;
      const query = { email: user?.email };
      const result = await usersCollection.findOne(query);
      console.log(result?.role);
      if (!result || result?.role !== "Dr")
        return res.status(401).send({ message: "Unauthorized Access!!" });
      next();
    };

    // verify patient middleware
    const verifyEmployee = async (req, res, next) => {
      console.log("patient middleware");
      const user = req.user;
      const query = { email: user?.email };
      const result = await usersCollection.findOne(query);
      console.log(result?.role);
      if (!result || result?.role !== "Patient")
        return res.status(401).send({ message: "Unauthorized Access!!" });
      next();
    };

    // jwt generator
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "365d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // clear jwt token on logout
    app.get("/logout", async (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          maxAge: 0,
        })
        .send({ success: true });
    });

    // create-payment-intent
    app.post("/create-payment-intent", async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    // save payment info
    app.post("/payments-history", async (req, res) => {
      const paymentInfo = req.body;
      try {
        const result = await paymentHistoryCollection.insertOne(paymentInfo);
        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // ------------------ user start here -------------------- //

    //save user data in db
    app.put("/user", async (req, res) => {
      const user = req.body;
      const query = { email: user?.email };

      // if user already in db
      try {
        const isExist = await usersCollection.findOne(query);
        if (isExist) {
          return res.send(isExist);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ message: error.message });
      }

      // save user for the first time
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...user,
        },
      };

      try {
        const result = await usersCollection.updateOne(
          query,
          updateDoc,
          options
        );
        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // save block user
    app.put("/block-user", async (req, res) => {
      const email = req.body;
      try {
        const result = await blockUsersCollection.insertOne(email);
        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // get block user
    app.get("/block-user/:email", async (req, res) => {
      const email = req.params.email;
      try {
        const result = await blockUsersCollection.findOne({ email });
        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // get single user details
    app.get("/users-details/:email", async (req, res) => {
      const email = req.params.email;
      try {
        const result = await usersCollection.findOne({ email });
        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // get single user
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      try {
        const result = await usersCollection.findOne({ email });
        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // update single user details
    app.put("/update-details/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...user,
        },
      };

      try {
        const result = await usersCollection.updateOne(
          query,
          updateDoc,
          options
        );
        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // ------------------ user end here -------------------- //

    // ------------------ patient dashboard start here -------------------- //

    // get dr data
    app.get("/users", async (req, res) => {
      const role = req.query.role || "doctor";
      try {
        const result = await usersCollection.find({ role }).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // ------------------ patient dashboard  end here -------------------- //
    // ------------------ doctor dashboard  start here -------------------- //
    // ------------------ doctor dashboard  end here -------------------- //
    // ------------------ admin dashboard  start here -------------------- //
    // ------------------ admin dashboard  end here -------------------- //

    // ----------------this is the doctor handile api section ----------------------------------------
    app.get("/apppionment-request", async (req, res) => {
      const email = { doctorEmail: req.query.email };
      const result = await appointmentCollection.find(email).toArray();
      res.send(result);
    });

    app.patch("/appionment-approve/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const updates = {
        $set: {
          status: "approved",
        },
      };

      const result = await appointmentCollection.updateOne(query, updates);
      res.send(result);
    });
    app.patch("/appionment-reject/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const updates = {
        $set: {
          status: "rejected",
        },
      };

      const result = await appointmentCollection.updateOne(query, updates);
      res.send(result);
    });

    app.get("/approve-appionment", async (req, res) => {
      const status = { status: "approved", doctorEmail: req.query.email };

      const result = await appointmentCollection.find(status).toArray();
      res.send(result);
    });
    app.get("/patient-deatils/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await appointmentCollection.findOne(query);
      res.send(result);
    });
    app.get("/patients-deatils/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await appointmentCollection.findOne(query);
      res.send(result);
    });

    app.post("/add-presaipation", async (req, res) => {
      const presaipationInfo = req.body;
      const result = await presaipationCollection.insertOne(presaipationInfo);
      res.send(result);
    });

    app.get("/show-prescription", async (req, res) => {
      const query = {
        patientEmail: req.query.email,
        doctorEmail: req.query.dremail,
      };

      const result = await presaipationCollection.findOne(query);
      res.send(result);
    });

    app.get("/appionment-today", async (req, res) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const tomorrow = new Date();

      tomorrow.setHours(24, 0, 0, 0);

      const todayAppionments = await appointmentCollection.countDocuments({
        admittedDate: { $gte: today, $lt: tomorrow },
      });

      const pending = { status: "pending" };

      const pendingappionment = await appointmentCollection.countDocuments(
        pending
      );

      const allAppionments =
        await appointmentCollection.estimatedDocumentCount();

      res.send({
        todayAp: todayAppionments,
        pendingAp: pendingappionment,
        allAp: allAppionments,
      });
    });

    app.get("/hsService-card", async (req, res) => {
      const result = await HservoceCardCollection.find().toArray();
      res.send(result);
    });

    app.get("/serviceDs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await HservoceCardCollection.findOne(query);
      res.send(result);
    });

    app.post("/Booking-HS", async (req, res) => {
      const bookingInfo = req.body;
      const result = await HSBookingCollection.insertOne(bookingInfo);
      res.send(result);
    });

    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
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

// test
app.get("/", (req, res) => {
  res.send("lifeline server is Running");
});

app.listen(port, () => {
  console.log(`lifeline server is running on port: ${port}`);
});
