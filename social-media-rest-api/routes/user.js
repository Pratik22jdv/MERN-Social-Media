const router = require("express").Router();
const User = require("../models/User"); 
const bcrypt = require("bcrypt");

router.get("/", (req, res)=>
{
    res.send("User route");
});

//Update User
router.put("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin)
    {
        if(req.body.password)
        {
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err);
            }
        }

        try{
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body});
            res.status(200).json("Account Updated");
        }catch(err)
        {
            return res.status(500).json(err);
        }
        
    }
    else
    {
        return res.status(403).json("You can not update someone else's account!!");
    }
});

//Delete user
router.delete("/:id", async(req, res)=>{
    console.log(req.body);
    if(req.body.userId === req.params.id || req.body.isAdmin)
    {
        try{
            const user = await User.deleteOne({id:req.params.id});
            //console.log(user);
            if(user.deletedCount!=0)res.status(200).json("Account Deleted Successfully");
            else res.status(200).json("Account Not found");
        }catch(err)
        {
            //console.log(err);
            return res.status(500).json(err);
        }
        
    }
    else
    {
        return res.status(403).json("You can not delete someone else's account!!");
    }
});

//Get user by Id
router.get("/:id", async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, updatedAt, createdAt, ...others} = user._doc;
        //console.log(user);
        res.status(200).json(others);
    }catch(err){
        return res.status(500).json(err.message);
    }
});

module.exports = router;