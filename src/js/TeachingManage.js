import React from 'react';
import ReactDOM from 'react-dom';

import Top from './Top';
import StudentList from "./StudentList";
import avatar from "../assets/admin-avatar.png";
import userLogo from "../assets/circle.png";
import checkLogo from "../assets/icon-check.png";
import manageLogo from "../assets/icon-manage.png";
import unlockLogo from "../assets/icon-unlock.png";

let otherStyle = {backgroundColor:'white', fontWeight: 'normal'};
let chosenStyle = {backgroundColor:'#F2C94C', fontWeight: 'bold'};

function TeachingManage() {
    return(
        ReactDOM.render(
            <React.StrictMode>
                <Top />
                <div className="HeadSide">
                    <img src={avatar} alt="admin" className="headAdmin" />

                    <div className="adminInfo">
                        <img src={userLogo} alt="manage" className="adminLogo" />
                        <label className="adminName">admin-username</label>
                    </div>

                    <div className="sideItem" id="check" style={otherStyle} onClick={jumpCheck}>
                        <img src={checkLogo} alt="check-icon" className="sidePic" />
                        <label className="sideText">教练审核</label>
                    </div>

                    <div className="sideItem" id="manage" style={otherStyle} onClick={jumpManage}>
                        <img src={manageLogo} alt="manage-icon" className="sidePic"/>
                        <label className="sideText">教练管理</label>
                    </div>

                    <div className="sideItem" id="unlock" style={chosenStyle}>
                        <img src={unlockLogo} alt="unlock-icon" className="sidePic"/>
                        <label className="sideText" >教学管理</label>
                    </div>

                </div>
                <StudentList/>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

export default TeachingManage;

function jumpCheck() {
    window.location.href = "/CoachCheck";
}

function jumpManage() {

    window.location.href = "/CoachManage";
}