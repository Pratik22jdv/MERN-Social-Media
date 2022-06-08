import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {format} from 'timeago.js';
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import {Users} from "../../dummyData"

export default function Posts({post}) {
    const [likes, setLikes] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async()=>{
            const res = await axios.get(`http://localhost:8800/api/user/${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);

    const likeHandler = ()=>{
        setLikes(isLiked ? (likes-1): (likes+1));
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImage" src={user.profilePicture || "assets/person/noAvatar.png"} alt="" />
                        <span className="postUsername"><b>{user.username}</b></span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>

                    <div className="postTopRight"> <MoreVertIcon /> </div>
                </div>


                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postImage" src={post.img} alt="" />
                </div>

                <div className="postBottom">
                    <div className="BottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{likes} peple like it</span>
                    </div>

                    <div className="postBotttomRight">
                        <div className="postCommentText">{post.comments} comments</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
