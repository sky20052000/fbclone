const mongoose = require("mongoose");

const fbSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:10,
        unique:Boolean
    },

    email:{
     type:String,
       
    },

    password:{
        type:String,
       
    },

    profilePictures:{
        type:String,
        default:""
       
    },

    coverPictures:{
        type:String,
        default:""
       
    },

    followers:{
        type:Array,
        default:[]
       
    },

    followings:{
        type:Array,
        default:[]
       
    },
    desc:{
        type:String,
        max:50
    },
},
{timestamps:true}
);

// creating collection

const Fb  = new mongoose.model("Fb",fbSchema);
module.exports = Fb;