const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
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
        required : true,
        trim : true

    },
    seats: {
        type: Number,
        min:10,
        max:50
    },
   
    price : {
        type : Number,
        required : true,
        trim : true
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
    language : {
        type : String,
        enum : ['English', 'Arabic', 'French']
    },
    buyers : {
        type : Number,
      
        default : 0
    } ,
    reviews :{
        type : Number,
    
        min:1,
        max:10
    },
    image :{
        type:String,
        required: true
    },
},
     {timestamps: true }
       
   

    
)


module.exports = mongoose.model("Course", coursesSchema);