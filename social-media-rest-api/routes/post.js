const router = require("express").Router();
const Post = require("../models/Post"); 

router.get("/", (req, res)=>{
    res.send("Post route");
});

//Create post
router.post("/", async(req, res)=>{
    const newPost = new Post(req.body);

    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        return res.status(500).json(err);
    }
});

//Update post
router.put("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId)
        {
            await post.updateOne({$set: req.body});
            res.status(200).json("Post Updated successfully!!");
        }
        else 
        {
            res.status(403).json("You can update only your posts");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete Post
router.delete("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId)
        {
            await post.deleteOne({$set: req.body});
            res.status(200).json("Post Deleted successfully!!");
        }
        else 
        {
            res.status(403).json("You can delete only your posts");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;