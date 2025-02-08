// const express = require("express");
// const User = require("../models/User")
// const {getToken} = require("../utils/helpers");
// const router = express.Router();
// const bcrypt = require("bcrypt");


// // This post route will help to register a user
// router.post("/register",async(req,res)=>{

//   // This code will run when the /register api is called as a POST request

//   // My req.body() will be of the format {email, password, firstname, lastname,username}

//   const {email,password,firstName,lastName,userName} = req.body;

//   // Step 2 : Does a user with this email already exists, If yes, we throw an error

//   const user = await User.findOne({email : email});
//   if(user){
//     return res.status(403).json({error :"A user with this email already exists"})
//   }

//   // This is a valid request ...
//   // Step 3 : Create a new user in the DB

//   // Step 3.1 : We do not store passwords in plain text
//   // Hence we convert the plain text password to a hash. (password to hash : possible , vice versa not!!)
//   const hashedPassword = bcrypt.hash(password,10);
//   const newUserData = {
//     email,password:hashedPassword,firstName,
//     lastName,
//     userName
//   };
//   const newUser = await User.create(newUserData);


//   // Step 4: we want to create the token to return to the user
//   const token = await getToken(email,newUser);
  
//   // Step 5 : Return the result to the user
//   const userToReturn = {...newUser.toJSON(),token};
//   delete userToReturn.password;
//   return res.status(200).json(userToReturn);
// });


// router.post("/login", async (req,res)=>{
//   // Step 1 : Get email and password sent by user from req.body
//   const {email,password} = req.body
//   // Step 2 : Check if a user with the given email exists. If not, the credentials are invalid
//   const user = await User.findOne({email : email})
//   if(!user){
//     return res.status(403).json({err:"Invalid Credentials"});
//   }

//   // Step 3 : If the user exists, check if the passoword is correct, if not credentials are invalid
//   const isPasswordValid = await bcrypt.compare(password,user.password);
//   // isPasswordValid contains boolean value
//   if(!isPasswordValid){
//     return res.status(403).json({err: "Invalid credentials"});
//   }


//   // Step 4 : If the credentials are correct, return a token to the user
//   const token = await getToken(user.email,user);
//   const userToReturn = {...user.toJSON(),token};
//   delete userToReturn.password;
//   return res.status(200).json(userToReturn);
// })

// module.exports = router;

const express = require("express");
const User = require("../models/User");
const { getToken } = require("../utils/helpers");
const router = express.Router();
const bcrypt = require("bcrypt");

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName, userName } = req.body;

    // Check if a user with this email already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({ error: "A user with this email already exists" });
    }

    // Hash the password correctly
    const hashedPassword = await bcrypt.hash(password, 10); // ✅ Fixed

    // Create new user
    const newUserData = {
      email,
      password: hashedPassword, // ✅ Fixed
      firstName,
      lastName,
      userName
    };

    const newUser = await User.create(newUserData);

    // Generate token
    const token = await getToken(email, newUser);

    // Prepare user data to return
    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;

    return res.status(200).json(userToReturn);
  } catch (error) {
    console.error("Error in register route:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ err: "Invalid Credentials" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ err: "Invalid credentials" });
    }

    // Generate token
    const token = await getToken(user.email, user);
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;

    return res.status(200).json(userToReturn);
  } catch (error) {
    console.error("Error in login route:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
