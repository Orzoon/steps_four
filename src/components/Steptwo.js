import React, {forwardRef} from "react";

import "../scss/steptwo.scss"
const Steptwo = forwardRef(({}, ref) => {
    return (
        <div className="twoContainer" ref = {ref}>
            {/*---LEFT PART */}
            <div className = "twoLeftCon">
                <div className = "twoImageCon">
                    <img className = "twoImage" src = "https://avatars.githubusercontent.com/u/25638825?s=96&v=4" alt="myImage"/>
                </div>
                <div className = "twoHeading">
                    <h3>Arjun D Kunwar</h3>
                    <ul>
                        <li>Web rookie  |</li>
                        <li>09:12:1996</li>
                    </ul>
                </div>
            </div>

            {/*---RIGHT PART */}

            <div className = "twoRIghtCon">
                <div className="twoRight">
                </div>
                <div className = "svgContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" xmlSpace="preserve">
                        <circle className = "circleBg" cx="60" cy="60.834" r="54.167"/>
                        <circle className = "circleProgress" cx="60" cy="60.834" r="54.167"/>
                    </svg>
                </div>
                <div className = "circleFix">
                    <div className = "profiles profile1">
                    </div>
                    <div className = "profiles profile2">
                    </div>
                    <div className = "profiles profile3">
                    </div>
                    <div className = "profiles profile4">
                    </div>
                </div>
            </div>


            {/*--Step Three Part -- */}
            <div className = "stepThree">

            </div>
        </div>
    )
})

export default Steptwo;