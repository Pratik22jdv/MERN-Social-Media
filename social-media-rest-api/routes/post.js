const router = require("express").Router();
const Post = require("../models/Post"); 
const User = require("../models/User");

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

//Like-Dislike Post
router.put("/:id/like", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId))
        {
            await post.updateOne( { $push: {likes:req.body.userId} } );
            res.status(200).json("Post has been liked");
        }
        else 
        {
            await post.updateOne( { $pull: {likes:req.body.userId} } );
            res.status(200).json("Post has been disliked");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//Get Post
router.get("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});

//Get Timeline Post
router.get("/timeline/:userId", async (req, res)=>{
    try{
        const user = await User.findById(req.params.userId);
        const friendsIds = user.followings;
        const userPosts = await Post.find({userId: user._id});
        console.log(friendsIds);
        const friendPosts = await Promise.all(
            friendsIds.map((friendsId)=>{
                return Post.find({userId: friendsId});
            })
        );//We have to use Promise, otherwise it won't be able fetch all friends posts
        res.status(200).json(userPosts.concat(...friendPosts));
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;