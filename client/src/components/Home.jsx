import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import Slider from "./Slider";
import Footer from "./Footer";

const Home = () => {
  const [userName, setUserName] = useState();
  const [show, setShow] = useState(false);

  const userHome = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserName(data.name);
      setShow(true);
      if (!res.status === 200) {
        const error = new Error(res.err);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userHome();
  }, []);

  return (
    <div style={{backgroundColor:"#E3CCAE",paddingTop:"50px"}}>
      <div className="sliban">
        <Slider />
      </div>
      <br /><br/>
      <div className="col-md-12 chhaya">
        <p className="big_name">
          {show
            ? `Hello, ${userName}!! Welcome.Please Click on Grievance Tab to file your greivance `
            : "Welcome! User please Log in to file Your Grievance."}
        </p>
      </div>
      <br />
      <div className="container" >
        <p align="justify">
          Centralised Public Grievance Redress and Monitoring System (CPGRAMS)
          is an online platform available to the citizens 24x7 to lodge their
          grievances to the respective authorities on any subject related to
          service delivery. It is a single portal which can connect to all the
          Ministries/Departments of Government of India and States , also can be
          utilised in private sector such as business houses,collage
          universities etc. Every Departments have role-based access to this
          system. CPGRAMS is also accessible to the citizens through standalone
          mobile application downloadable through Google Play store and mobile
          application.
        </p>
        <br />
        <p align="justify">
          The status of the grievance filed in CPGRAMS can be tracked with the
          unique registration ID provided at the time of registration of the
          complainant. CPGRAMS also provides appeal facility to the citizens if
          they are not satisfied with the resolution by the Grievance Officer.
          The status of the Appeal can also be tracked by the petitioner with
          the grievance registration number.
        </p>
        <br/><br/>
        <h2> Issues which are not taken up for redressal</h2>
        <hr />
        <ul>
          <li>
            {" "}
            Subjudice cases or any matter concerning judgment given by any
            court.
          </li>
          <li> Personal and family disputes.</li>
          <li> RTI matters.</li>
          <li> Suggestions</li>
          <li>
            {" "}
            Anything that impacts upon territorial integrity of the country or
            friendly relations with other countries.
          </li>
        </ul>
        <hr />
      </div>
      <Footer/>
      
    </div>
  );
};

export default Home;
