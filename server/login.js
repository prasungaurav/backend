const express= require('express');
const cors = require('cors');
const {User} = require('./signup');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');


const router = express.Router();


router.use(cors());
router.use(express.json());
router.use(session({
    secret:'its my session',
    resave: false,
    saveUninitialized:true,
    cookie:{maxAge:7*24*60*60}
}))

router.post('/',async(req,res)=>{
      const {email,password} = req.body;
      try {
        const user = await User.findOne({ email }); // Find user by email 
        if (user && user.password === password) {
            const sessionId = uuidv4();
            console.log(sessionId);
            res.json({ message: 'Login successful', sessionId });
        } else {
            res.json({ message:'email or passowrd is incorrect'})
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
    

})



module.exports = router;
