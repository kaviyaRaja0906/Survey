import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import img from "../assets/survey.png";
import Footer from "./Footer";
import Question3 from "./Question3";
import Home from "./Home";
import Consultation from "./Consultation";

function Confirming(){

  let navigate = useNavigate();

  useEffect(()=> {
    setTimeout(() => {
      navigate('/Consultation');
    }, 1000);
  },[]);

    return(
        <div>
        <Navbar />
         <div className="container">
           <div className="justify-content-center">
           <div className="head">
              <Home />
              <div className="Analyze">
                <h3 className="confirming">Confirming Eligiblity...</h3>
              </div>
           </div>
           </div>
         </div>
         <Footer />
       </div>  
    );
}

export default Confirming;