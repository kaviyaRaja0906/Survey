import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import img from "../assets/survey.png";
import Footer from "./Footer";
import Question3 from "./Question3";
import Home from "./Home";
import Confirming from "./Confirming";

function Matching(){

  let navigate = useNavigate();

  useEffect(()=> {
    setTimeout(() => {
      navigate('/Confirming');
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
                <h3 className="matching">Matching You with the best Options...</h3>
              </div>
           </div>
           </div>
         </div>
         <Footer />
       </div>  
    );
}

export default Matching;