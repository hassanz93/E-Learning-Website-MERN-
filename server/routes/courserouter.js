const express = require("express");
const mongoose = require("mongoose");
const Course = require('../models/course.js');
const router= express.Router()
const { uploadCourseValidation} = require('../validation.js');
const courseController = require("../controllers/coursecontroller.js");
const auth = require("../middelware/auth");

router.post('/uploadcourse',auth, async (req, res) => {

    const {error} = uploadCourseValidation(req.body);
    if(error) return res.status(400).send({message: error.details[0].message} );

     const course = new Course({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        videos: req.body.videos,             
        credit : req.body.credit, 
        image :req.body.image,
        language:req.body.language,
        seats:req.body.seats
    });
  
    try {
        const savedCourse = await course.save();
        res.send(savedCourse);
    }catch(err) {
        res.status(400).send(err);
    }
})


 // CRUD for courses
router.route('/').get( courseController.findCourses);
router.route('/').post( courseController.createCourse);
router.route('/:id').get( courseController.findCourseById);
router.route('/:id').patch(courseController.updateCourse);
router.route('/:id').delete(courseController.deleteCourse);
 

module.exports=router