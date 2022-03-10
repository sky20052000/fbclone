const config = require("./config/config.json");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// configaration
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//db connection
mongoose.connect(config.MONGO_URL).then((data)=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("no connection");
})

// routes
app.use("/api/fbRoutes", require("./routes/fbRoute"));
app.use("/api/postRoutes", require("./routes/postRoute"));
const port = config.PORT || 4440;
app.listen(port,(req,res)=>{
    console.log(`server listening on the : ${port}`);
})