const Course = require("../models/course");
// const connection= require('../dbconnect');


exports.findCourses = async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
};

exports.createCourse = async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.send(course);
};

//find course by category
exports.findCategory = async (req, res) => {
  try {
    const Category1 = req.query.category;
    const category = await Course.find({category:Category1});
    res.send(category);
  } catch {
    res.status(404).send({ error: "category is not found!" });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    Object.assign(course, req.body);
    course.save();
    res.send(course);
  } catch {
    res.status(404).send({ error: "course is not found!" });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    await course.remove();
    res.send(true);
  } catch {
    res.status(404).send({ error: "course is not found!" });
  }
};


