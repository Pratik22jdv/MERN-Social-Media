import React from 'react';
import "./rightbar.css";
import { Users } from "../../dummyData"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="giftIcon" src="/assets/gift.png" alt="" />
                    <span className="birthdayText"><b> Virat</b> and <b>3 other friends</b> have their birthdays</span>
                </div>

                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => (

                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img
                                    className="rightbarProfileImg"
                                    src={user.profilePicture}
                                    alt="" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">{user.username}</span>
                        </li>
                        
                    )
                    )}


                </ul>
            </div>
        </div>
    );
}
