import React, {forwardRef} from "react";
import {IoNotifications} from "react-icons/io5";


// style
import "../scss/stepone.scss";

const Stepone = forwardRef(({count, stepsCount, setStepsCount}, ref) => {
    return(
        <div    className="oneContainer" ref = {ref} 
                onClick = {(e) => {
                        if(stepsCount === 1){
                            setStepsCount(stepsCount + 1)
                        }
                    }}>
            <div className = "not_IconCon">
                <IoNotifications/>
                <div className = "not_count_wrapper">
                    <p className = "not_count">{count}</p>
                </div>
            </div>
        </div>
    )
})

export default Stepone;