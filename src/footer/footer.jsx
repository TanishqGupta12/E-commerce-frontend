import React from "react";

import app from "../images/img/pay/app.jpg";
import play from "../images/img/pay/play.jpg";

import "./footer.css"

const footer = ()=>{
    return (
        <div id ="footer">
            <div className="leftFooter">
                <h4> DownLoad Our App</h4>
                <p>DownLoad App For Android and Ios Moblie Phone</p>
                <img src={app} alt="Playstore"/>
                <img src={play} alt="App store"/>
            </div> 

            <div className="midFooter">
                <h1> Castro store</h1>
                <p>High Quality is Frist Pripority</p>

                <p>CopyRight 2023  &copy; LPCPS  </p>
            </div> 
 
            <div className="rightFooter">

                <a href="/Instagram" >Instagram</a>
                <a href="/YouTube" >YouTube</a>
                <a href="/FaceBook" >FaceBook</a>
            </div> 
        </div> 
    )

}

export default footer