import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import img from "../assets/survey.png";
import Footer from "./Footer";
import Question3 from "./Question3";
import Home from "./Home";

function Question2(){

  let navigate = useNavigate();

   function navigateToQn3(){
    navigate('/Question3');
   }
    return(
      <div>
      <Navbar />
       <div className="container">
         <div className="justify-content-center">
         <div className="head">
           <Home />
            <div className="Qn-1">
            <h3>
          Did you or a family member  who lived with you<br></br>
             experience any serious health illness or<br></br>
          injuries like cancer,organ failure,reproductive<br></br>
                       issues,death or other? *
            </h3>
        <br></br>
        <button className="yes-btn" onClick={navigateToQn3}>Yes</button>
        <br></br>
        <button className="no-btn" onClick={navigateToQn3}>No</button>
        <br></br>
      </div>
         </div>
         </div>
       </div>
       <Footer />
     </div>
    );
}

export default Question2;