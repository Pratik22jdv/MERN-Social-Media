import React from 'react';
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Posts() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImage" src="/assets/person/1.jpg" alt="" />
                        <span className="postUsername">Pratik Jadhav</span>
                        <span className="postDate">5 min ago</span>
                    </div>

                    <div className="postTopRight"> <MoreVertIcon /> </div>
                </div>


                <div className="postCenter">
                    <span className="postText">Its My First Post:)</span>
                    <img className="postImage" src="/assets/person/1.jpg" alt="" />
                </div>

                <div className="postBottom">
                    <div className="BottomLeft">
                        <img className="likeIcon" src="/assets/like.png" alt="" />
                        <img className="likeIcon" src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">100 peple like it</span>
                    </div>

                    <div className="postBotttomRight">
                        <div className="postCommentText">39 comments</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
