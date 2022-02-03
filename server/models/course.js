const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    author: {
        type : String,
        trim : true
    },
    title : {
        type : String,
        required : true,
        trim : true
    },
    description :{
        type : String,
        required : true,
        trim : true
    },
    category : {
        type : String,
        enum : ['Programming-FrontEnd', 'Programming-BackEnd', 'Physics' ],
        required : true
    },
   
    price : {
        type : Number,
        required : true,
    },
    seats: {
        type: Number,
        min:10,
        max:50
    },
    language : {
        type : String,
        enum : ['English', 'Arabic', 'French']
    },
    videos: [ {
        video : {
            type : String,
            required : true,
            trim : true
        },
        videotitle : {
            type : String,
            required : true,
            trim : true
        },
        videodescription :{
            type : String,
            required : true,
            trim : true
        }   
            }],
    credit : {
        type : String,
        trim : true
    },
    buyers : {
        type : Number,
      
        default : 0
    } ,
    reviews :{
        type : Number,
        min:1,
        max:5
    },
    reviewsnumber :{
        type : Number,
    },
    status :{
        type : String,
    },
    image :{
        type:String,
        required: true
    },
},
     {timestamps: true }
       
   

    
)


module.exports = mongoose.model("Course", coursesSchema);