const express = require("express");
const router= express.Router()

const categoryController = require("../controllers/categorycontroller.js");

router.route('/').get(categoryController.findCategory);

module.exports=router