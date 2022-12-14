import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import img from "../assets/survey.png";
import Footer from "./Footer";
import Question3 from "./Question3";
import Home from "./Home";

function Consultation(){
    return(
        <div>
        <Navbar />
         <div className="container">
           <div className="justify-content-center">
           <div className="head">
              <Home />
              <div className="Analyze">
                <h5 className="last-step">
                  Last step - You are eligible and qualify for<br></br>
                                compensation.
                </h5>
                <br></br>
                <h4 className="call-highlight">FREE CONSULTATION CALL</h4>
                <br></br>
                <h6 className="call-des">There are absolutely No costs or commitments incurred for calling and talking to our<br></br>
                  legal team.
                </h6>
                <br></br>
                <h3 className="tap">TAP TO CALL</h3>
                <button className="anim-btn glow">+1(346) 788-6952</button>
                <br></br>
                <br></br>
                <span className="conditions">
                 By clicking the button above and calling, you provide your electronic signature & consent to receive automated promotional
                   messages from At Camp lejeune Settlement & its partners at the phone number you call from.You agree to the <b>Terms &
                   Conditions</b> and <b>Privacy Policy.</b> This agreement isn't a condition of any purchase. You can revoke the constent at any time.For
                     SMS campaigns. Text STOP to cancel and HELP for help. Msg and data rates may apply. Recurring msgs upto 10 msgs per
                                                                            month.
                </span>
              </div>
           </div>
           </div>
         </div>
         <Footer />
       </div>  
    );
}

export default Consultation;