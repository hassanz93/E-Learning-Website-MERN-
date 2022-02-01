const express = require("express");
const mongoose = require("mongoose");
const Course = require('../models/course.js');
const router= express.Router()
const { uploadCourseValidation} = require('../validation.js');
const courseController = require("../controllers/coursecontroller.js");

router.post('/uploadcourse', async (req, res) => {

    const {error} = uploadCourseValidation(req.body);
    if(error) return res.status(400).send({message: error.details[0].message} );

     const course = new Course({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        videos: [{
                video :req.body.video,
                videotitle : req.body.videotitle,
                videodescription :req.body.videodescription,
        }],
                     
        credit : req.body.credit, 
        image :req.body.image,
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
router.route('/?category').get(courseController.findCategory);
router.route('/:id').patch(courseController.updateCourse);
router.route('/:id').delete(courseController.deleteCourse);
router.route('/find/:category').get(courseController.findCourseByCategory);
 

module.exports=router