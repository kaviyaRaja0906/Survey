import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import img from "../assets/survey.png";
import Footer from "./Footer";
import Question3 from "./Question3";
import Home from "./Home";
import Matching from "./Matching";

function Reviewing(){

    let navigate = useNavigate();

    useEffect(()=> {
      setTimeout(() => {
        navigate('/Matching');
      }, 800);
    },[]);

    return(
        <div>
        <Navbar />
         <div className="container">
           <div className="justify-content-center">
           <div className="head">
              <Home />
              <div className="Analyze">
                <h3 className="Review">Reviewing Your Answers...</h3>
              </div>
              <br></br>
           </div>
           </div>
         </div>
         <Footer />
       </div>  
    );
}

export default Reviewing;