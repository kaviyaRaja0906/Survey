import React from "react";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import img from "../assets/survey.png";


function Home(){
    return(
        <div>
        <h4 className="head-h"><span className="alert">ATTENTION!</span>Did you serve,live or work at Marine Corps Base<br></br>
           Camp Lejeune,North Carolina between <span className="alert">August 1953, and</span><br></br>
           <span className="alert">December 1987?</span><span className="highlight">You may be entitles to compensation.</span>
         </h4>
         <br></br>
         <img  className="survey-img" src={img}></img>
         <br></br>
         <p className="content">
             U.S.Veterans, their family members or others may have been exposed to contaminated<br></br>
              drinking water between 1953 and 1987 at Camp Lejeune, North Carolina and developed<br></br>
              cancer or other serious health issues years later.Some of these servicemen,families or<br></br>
             others present at the base have been deemed ineligible or had their claims denied by the<br></br>
                      Veterans Administration, but a new law may alllow them compensation
         </p>
         <br></br>
         <p>Take this short quick if you qualify</p>
        </div>
    );
}

export default Home;