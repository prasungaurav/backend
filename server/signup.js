const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');

router.use(express.json());
router.use(cors());

mongoose.connect('mongodb://localhost:27017/firstpage')
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    contact: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    sessionId : {type: String}
});

const User = mongoose.model('User', userSchema);
router.post('/', async (req, res) => {
    const form = req.body;
    try{
    const newUser = new User({
        username: form.username,
        email: form.email,
        contact: form.contact,
        password: form.password,
    });
    await newUser.save()
    res.send('Signup successful!');
}
catch(err){res.send(' your email or contact number exist ')}
});

module.exports = {router,User};
