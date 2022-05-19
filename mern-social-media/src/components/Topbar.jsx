import React from 'react';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (

        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo"> MERN-Social</span>
            </div>

            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon />
                    <input placeholder="Search for people"/>
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home Page</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcon">
                <PersonIcon />
                <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIcon">
                <ChatIcon />
                <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIcon">
                <NotificationsIcon />
                <span className="topbarIconBadge">1</span>
                </div>
            </div>
        </div>
    );
}
