import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import img from "../assets/survey.png";
import Footer from "./Footer";
import Home from "./Home";
import Reviewing from "./Reviewing";

function Question3(){

  let navigate = useNavigate();

   function navigateToReview(){
    navigate('/Reviewing');
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
              Is the affected party represented by an<br></br>
                       attorney for this matter? *
            </h3>
            <br></br>
            <button className="no-btn" onClick={navigateToReview}>No</button>
            <br></br>
            <button className="yes-btn" onClick={navigateToReview}>Yes</button>
            <br></br>
           </div>
         </div>
         </div>
       </div>
       <Footer />
     </div>
    );
}

export default Question3;