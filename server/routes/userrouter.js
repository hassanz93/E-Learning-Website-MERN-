const router = require('express').Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation.js');




// in index.js route starts at /users
// so at register it continous at /users/register
router.post('/register', async (req, res) => {

    //Lets validate the data before we input user
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send({message: error.message} );
    
    // Checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send({message:'Email already exists'});

     // Checking if the user is already in the database
     const usernameExist = await User.findOne({username: req.body.username})
     if (usernameExist) return res.status(400).send({message:'username already exists'});

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        address: req.body.address
    });
  
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err) {
        res.status(400).send(err);
    }
  
});

// Login
router.post('/login', async (req, res) => {

    //Lets validate the data before we input user
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send({message: error.details[0].message} );

    // Checking if the email exists
    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(400).send({message:"Invalid email"});

    // Checking if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send({message:"Invalid password"});
 // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);

    const loggedIn = await bcrypt.compare(req.body.password, user.password);
    if(loggedIn) return res.status(200).send({message:"Logged in"});

   


});

const userController = require("../controllers/usercontroller.js");


 // CRUD for users
router.route('/').get(userController.findUsers)
                 .post( userController.createUser);
router.route('/:id').get(userController.findUser)
                    .patch(userController.updateUser)
                    .delete(userController.deleteUser);


 



module.exports = router;





