import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import img from "../assets/survey.png";
import Footer from "./Footer";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Home from "./Home";

function LandingPage(){

  let navigate = useNavigate();

    
  function nextQuestion(){
    navigate('/Question2');
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
               Did you or a loved one serve,live,or work at<br></br>
               Camp Lejeune for atleast 30 days between<br></br>
                         1953 and 1987? *
             </h3>
             <br></br>
             <button className="yes-btn" onClick={nextQuestion}>Yes</button>
             <br></br>
             <button className="no-btn" onClick={nextQuestion}>No</button>
             <br></br>
            </div>
         </div>
         </div>
       </div>
       <Footer />
     </div>
    );
}

export default LandingPage;