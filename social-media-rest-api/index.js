const express = require("express");
const app = express();
const mpngoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");

const userRoute = require("./routes/user");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

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

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.use("/api/user", userRoute);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);

app.get("/", (req, res)=>{
    res.send("Welcome to Social Media API");
})

app.listen(8800, ()=>{
    console.log("Backend is running");
})