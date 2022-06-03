import React, { forwardRef } from "react";

import "../scss/stepthree.scss"
const Stepthree = forwardRef(({props}, ref) => {
   return( 
    <div className = "threeContainer" ref = {ref}>
        <p className = "threeText">
            Some ipsom lorem text. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
        </p>
        <div className = "Readed">
                <h3>Readed</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </div>
    </div>)
})

export default Stepthree;