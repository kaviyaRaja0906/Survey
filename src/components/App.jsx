import React from "react";
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom";
import Confirming from "./Confirming";
import Consultation from "./Consultation";
import LandingPage from "./LandingPage";
import Matching from "./Matching";
import Navbar from "./Navbar";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Reviewing from "./Reviewing";

function App(){
    return(
     <div>
        <div>
         <Router>
          <div>
           <Routes>
            <Route exact path='/' element={<LandingPage />}  />
            <Route exact path='/Question2' element={<Question2 />}  />
            <Route exact path='/Question3' element={<Question3 />}  />
            <Route exact path='/Reviewing' element={<Reviewing />}  />
            <Route exact path='/Matching' element={<Matching />}  />
            <Route exact path='/Confirming' element={<Confirming />}  />
            <Route exact path='/Consultation' element={<Consultation />}  />
           </Routes>
          </div>
         </Router>
        </div>
     </div>
    );
}

export default App;