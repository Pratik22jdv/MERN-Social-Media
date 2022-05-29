import React from 'react';
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"

export default function Posts({post}) {
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
                        <img className="likeIcon" src="/assets/like.png" alt="" />
                        <img className="likeIcon" src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">{post.like} peple like it</span>
                    </div>

                    <div className="postBotttomRight">
                        <div className="postCommentText">{post.comment} comments</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
