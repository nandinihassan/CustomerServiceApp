var express = require("express");
var router = express.Router();
var CustCollection = require("../Models/cusModel");
var User = require('../Models/user');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');


router.post("/addcustomer", (req, res) => {
  var cc = new CustCollection(req.body);
  cc.save();
  res.status(201).send(cc);
});

router.get("/viewcustomer", (req, res) => {
  CustCollection.find({}, (err, data) => {
    res.json({ data });
  });
});

router.put("/updatecustomer", (req, res) => {
  CustCollection.findById(req.body._id, (err, data) => {
    data.Name = req.body.Name;
    data.Address = req.body.Address;
    data.City = req.body.City;
    data.State = req.body.State;
    data.save();
    res.status(201).send(data);
  });
});

 //Register 
 router.post('/register',async  (req, res) => {
  //Validate
    const { error } = await registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
     
    //Cheking if email exists !
    const emailExist = await User.findOne({ email: req.body.email })
    if(emailExist) return res.status(400).send('Email already exists')

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

   // New User
   const user = new User({
     name: req.body.name,
     email: req.body.email,
     password: hashedpassword,
     
   });
   user.save();
   res.status(201).send({ user: user._id });
 });



 //Login
 router.post('/login', async (req, res) => {
   //Validate
  const { error } = await loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  //Cheking if email exists !
  const user = await User.findOne({ email: req.body.email })
  if(!user) return res.status(400).send('Email is not found');

  //if password is correct
   const validPass = await bcrypt.compare(req.body.password, user.password);
   if(!validPass) return res.status(400).send('Invalid Password');

 });

module.exports = router;
