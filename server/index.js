const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const UserModel = require('./Model/User'); // Assuming User model is already defined

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Signup route (already in place)
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await UserModel.findOne({ email });
        if (existUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login route (newly added)
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // If password matches, return the user's name
        res.status(200).json({ message: "Login successful", name: user.name });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
