import React from 'react';
import Share from '../share/Share';
import Posts from '../Post/Post';
import "./feed.css";

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Posts />
                <Posts />
                <Posts />
            </div>
        </div>
    );
}
