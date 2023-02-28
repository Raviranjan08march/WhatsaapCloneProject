import React from "react";
import "./loginform.css";
import whats from "./images/WhatsApp.svg";

const Loginform = () => {

    return(

        
    <div className="wrapper">
            <div className="Footer">
                <img style={{ width:'7rem'}}src={whats}/>
                <h4 style={{position:'realtive', top:'15px'}}>WhatsApp Web</h4>
            </div>
        <div className="mid-sec">
            <div className="mid">
                <div className="mid-foot">Use WhatsApp on your Computer</div>
            </div>
            <div className="list">
                <ol> 
                    <li>Open WhatsApp on your phone</li>
                    <li>Tap Menu, or Setting </li>
                    <li>Tap on link device</li>
                </ol>
            </div>
            <div className="auth">
                    <div>
                        <label htmlFor="name">Username :   </label>
                        <input  type="text" placeholder="user name" className="name" />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="email">Email Add :   </label>
                        <input  type="email" placeholder="user@gmail.com" id="email" size="30" />
                    </div>
                    <div>
                        <button className="button" style={{fontFamily:'Poppins', backgroundColor:"rgb(0,500,75)" }} ><h4>Follow</h4></button>
                    </div>

            </div>
        </div>
    </div>
    )  
}  

export default Loginform;