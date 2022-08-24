const express = require('express');
const mongoose = require("mongoose");

const path = require('path')
const app=express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const BeatRoutes = require("./routes/BEAT.js")
const UserRoutes = require("./routes/auth.js")

app.use(express.static('public'));

app.listen(8000,function(req,res){
    console.log('server running on port 8000')
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
// DB connection 
mongoose
  .connect("mongodb://krunalsukhe:6309433060@cluster0-shard-00-00.yhryi.mongodb.net:27017,cluster0-shard-00-01.yhryi.mongodb.net:27017,cluster0-shard-00-02.yhryi.mongodb.net:27017/?ssl=true&replicaSet=atlas-9ulhha-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {

    console.log("DB CONNECTED");
  });
  //My Routes
// app.use("/api", BeatRoutes);
app.use("/api", UserRoutes);

app.get("/register", (req,res)=>{
  res.render('register.ejs',{});
}
)
app.get("/login", (req,res)=>{
  res.render('login.ejs',{});
}
)
app.get("/", (req, res) => {
  res.render('home.ejs')
})
