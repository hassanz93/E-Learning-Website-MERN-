// Validation
const Joi = require('@hapi/joi');
const { verify } = require('jsonwebtoken');
const Uploader = require("./models/user");
const Courses= require("./models/course")
// const AppError = require('./utils/appError')
// const catchAsync = require('./utils/catchAsync')
const { privatekey } = process.env

// module.exports = {
//     uploaderToken : catchAsync( async (req, res, next) => {
//         const token = req.headers.authorization
//         if(!token) return next(new AppError('token needed', 400 ))
//         const foundUser = await Uploader.findOne({accessToken : token})
//         if(!foundUser) return next(new AppError('invalid credentials', 400 ))
//         verify(token, privatekey, (err, _)=>{
//             if(err && err.name == 'JsonWebTokenError') return next(new AppError('invalid credentials', 400 ))
//             else if(err && err.name == 'TokenExpiredError') return next(new AppError('token expired', 400 ))
//             next()
//         })    
//     }),
// }

const registerValidation = (data) =>{
    const schema = Joi.object ({ 
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        username:Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
        address: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

const loginValidation = (data) =>{
    const schema = Joi.object ( { 
        email: Joi.string().required().email().label("email"),
        password: Joi.string().required().label("password")
    });
    return schema.validate(data);
};


const objectSchema = Joi.object({
         video: Joi.string().required(),
         videotitle: Joi.string().required(),
         videodescription: Joi.string().required()
}).required();

const arraySchema = Joi.array().items(objectSchema).min(1).required();

const uploadCourseValidation= (data) =>{
   const schema = Joi.object ({ 
        title :Joi.string().required(),
        description:  Joi.string().required(),
        category : Joi.string().required(),
        image:  Joi.string().required(),
        price :Joi.number().required(),
        videos:Joi.alternatives().try(objectSchema, arraySchema).required(),
        credit:Joi.string().required(),
        language:Joi.string().required(),
        seats:Joi.number().required().min(10).max(50)

 });
    return schema.validate(data);

}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.uploadCourseValidation= uploadCourseValidation;
