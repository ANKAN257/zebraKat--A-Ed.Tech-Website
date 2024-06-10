const express = require('express');
const router = express.Router();

const User = require('../models/userModel');



router.post('/register', async (req, res) => {
  try {
    console.log("req body :",new User(req.body));
    const { email, password } = req.body;

// Check if user with the given email already exists
const existingUser = await User.findOne({ email });
console.log("existingUser : ",existingUser);

if (existingUser) {
  // User already exists, send an error response
  return res.status(400).json({ success: false, message: 'User already exists' });
}


    const isAdmin = email === 'ankankumar071@gmail.com'; // Check if email matches admin email
    const newUser = new User({ email, password, isAdmin });
    await newUser.save();

 // Send response with a flag indicating whether the user is an admin
 res.status(201).json({ 
  success: true,
  message: 'User registered successfully',
 isAdmin 
});



  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log("req body :",new User(req.body));
    const { email, password } = req.body;


const existingUser = await User.findOne({ email });
console.log("existingUser : ",existingUser);

if (!existingUser) {
  
  return res.status(400).json({ success: false, message: ' user Not found ' });
}
// Assuming isAdmin is a property of the existingUser object
const isAdmin = existingUser.isAdmin;

// Compare the provided password with the stored password
if (existingUser.password !== password) {
  return res.status(401).json({ success: false, message: 'Invalid password' });
}



res.status(200).json({ success: true, message: 'User logged in successfully', isAdmin });





  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});





module.exports = router;