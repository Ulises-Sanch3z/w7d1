// Route for user login
// routes/auth.js

const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/auth');
const JWT = require("jsonwebtoken")
// Import the User model for database operations
const User = require('../models/user');
const bcrypt = require("bcrypt");

const hashPassword = async (req, res, next) => {
    try {
        if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedPassword;
        }
        next();
        } catch (err) {
            res.status(500).json({error: "error hashing password"});
        }  
};

// Route for user login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log(`email: ${email}, Password ${password}`)

    console.log(email, password)

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        console.log(user.email)

        // If user not found or password doesn't match, return an error

        console.log(`Hashed password: ${user.password}`)
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log("Result of password comparison:", passwordMatch);



        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        function generateToken(user) {
            return JWT.sign({
                id: user._id,
                email: user.email
            }, jwtSecret, { expiresIn: "1h"});
        }

        const token = generateToken(user)

        // Send the token in the response
        res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route for user registration
router.post('/register', hashPassword, async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ fullname, email, password });
        await newUser.save();

        // Generate a JWT token
        const token = generateToken(newUser);

        // Send the token in the response
        res.status(201).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Function to generate JWT token
function generateToken(user) {
    // Implement JWT token generation logic here
    // For example, you can use the jsonwebtoken package
    // Return the generated token
}

module.exports = router;
