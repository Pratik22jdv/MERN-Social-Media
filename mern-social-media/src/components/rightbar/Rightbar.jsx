import React from 'react';
import "./rightbar.css";

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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                                className="rightbarProfileImg"
                                src="/assets/person/1.jpg"
                                alt="" />
                            <span className="rightbarOnline"></span>    
                        </div>
                        <span className="rightbarUsername">Pratik Jadhav</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                                className="rightbarProfileImg"
                                src="/assets/person/1.jpg"
                                alt="" />
                            <span className="rightbarOnline"></span>    
                        </div>
                        <span className="rightbarUsername">Pratik Jadhav</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                                className="rightbarProfileImg"
                                src="/assets/person/1.jpg"
                                alt="" />
                            <span className="rightbarOnline"></span>    
                        </div>
                        <span className="rightbarUsername">Pratik Jadhav</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                                className="rightbarProfileImg"
                                src="/assets/person/1.jpg"
                                alt="" />
                            <span className="rightbarOnline"></span>    
                        </div>
                        <span className="rightbarUsername">Pratik Jadhav</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                                className="rightbarProfileImg"
                                src="/assets/person/1.jpg"
                                alt="" />
                            <span className="rightbarOnline"></span>    
                        </div>
                        <span className="rightbarUsername">Pratik Jadhav</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                                className="rightbarProfileImg"
                                src="/assets/person/1.jpg"
                                alt="" />
                            <span className="rightbarOnline"></span>    
                        </div>
                        <span className="rightbarUsername">Pratik Jadhav</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                                className="rightbarProfileImg"
                                src="/assets/person/1.jpg"
                                alt="" />
                            <span className="rightbarOnline"></span>    
                        </div>
                        <span className="rightbarUsername">Pratik Jadhav</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
