const express= require('express');
const cors=require('cors');

const router=express.Router();
router.use(cors());
router.use(express.json);

router.post('/',(req,res)=>{
    
})



module.exports = router;