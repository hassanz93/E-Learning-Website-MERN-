const Category = require("../models/course.js");

//find course by category
exports.findCategory = async (req, res) => {
      const Categoryquery = req.query.category;
      const firstCategory = await Category.find({category:Categoryquery});
      res.send(firstCategory);
    } 