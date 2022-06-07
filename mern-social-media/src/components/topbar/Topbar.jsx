import React from 'react';
import {Link} from "react-router-dom";

import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (

        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo"> MERN-Social</span>
                </Link>
            </div>

            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon" />
                    <input className="searchInput" placeholder="Search for people" />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home Page</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to="/profile">
                <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
                </Link>
            </div>
        </div>
    );
}
