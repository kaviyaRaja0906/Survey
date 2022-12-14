import React from "react";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className="footer">
            <hr className="hr"></hr>
            <br></br>
            <div className="justify-content-center footer-txt">
            <p>
              By contacting Camp Lejeune Settlement,yoy agree to receive a call back by up to two different legal providers, even if you are on the "Do Not Call" registry.If there are multiple<br></br>
              participating legal service providers, matching of an initial enquiry to a specific legal service provider is completed by an internal random process. Some cases may be transferred to<br></br>
              Other attorneys,discuss with your attorney. Camp Lejeune Settlement is not otherwise affiliated with or responsible for the representaions or services provided by the legal service<br></br>
              providers.
            </p>
            <br></br>
            <p>
              Our goal is to provide exceptional service.One of our agents may reach out to you to discuss your order, ask for feedback, and/or see if you need only assistance with your products,<br></br>
              services, or plans, at the phone number you provided regardless of your do-not-call-list status. You may opt-out of further contact at any time by simply telling our customer service<br></br>
              team that you would no longer like to be contacted, in the event that our team is unable to reach you by phone, they may send you a text message letting you know that we called.<br></br>
              Both our text message and phone calls may be sent or connected utilizing automated software. Carrier charges may apply. You may opt-out of any further contact via text message<br></br>
              by replying anytime with "STOP".
            </p>
            </div>
            <br></br>
            <h5 className="privacy"><a>Privacy Policy/Terms & Conditions</a></h5>
        </footer>
    )
}

export default Footer;