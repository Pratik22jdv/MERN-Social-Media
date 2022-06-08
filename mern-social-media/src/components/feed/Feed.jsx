import {React, useState, useEffect} from 'react';
import axios from 'axios';

import Share from '../share/Share';
import Post from '../Post/Post';
import "./feed.css";
//import {Posts} from "../../dummyData"

export default function Feed() {
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
       const fetchPosts = async () =>{
           const res = await axios.get("http://localhost:8800/api/post/timeline/62764dd747295a8957389671");
           setPosts(res.data);
       }
       fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p)=> (
                    <Post key = {p._id} post = {p} />
                )
                )}
            </div>
        </div>
    );
}
