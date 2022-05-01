const express = require("express");
const app = express();
const mpngoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");

dotenv.config();

//Database connection
mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });


//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("comman"));

app.get("/", (req, res)=>{
    res.send("Welcome to Social Media API");
})

app.listen(8800, ()=>{
    console.log("Backend is running");
})