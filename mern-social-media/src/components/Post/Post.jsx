import React from 'react';
import { useState } from 'react';
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"

export default function Posts({post}) {
    const [likes, setLikes] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = ()=>{
        setLikes(isLiked ? (likes-1): (likes+1));
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImage" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>

                    <div className="postTopRight"> <MoreVertIcon /> </div>
                </div>


                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImage" src={post.photo} alt="" />
                </div>

                <div className="postBottom">
                    <div className="BottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{likes} peple like it</span>
                    </div>

                    <div className="postBotttomRight">
                        <div className="postCommentText">{post.comment} comments</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
