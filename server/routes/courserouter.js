const express = require("express");
const mongoose = require("mongoose");
const router= express.Router()

const courseController = require("../controllers/coursecontroller.js");



 // CRUD for courses
router.route('/').get( courseController.findCourses);
router.route('/').post( courseController.createCourse);
router.route('/:id').patch(courseController.updateCourse);
router.route('/:id').delete(courseController.deleteCourse);

module.exports=router