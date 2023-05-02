import React, { useState } from "react";
import signpic from "../images/signup.gif";
import { NavLink, useHistory } from "react-router-dom";
import { FaEye, FaEyeSlash, FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import "../styles/contactform.css"
import Footer from "./Footer";
function startsWithNumber(str) {
  return /^\d/.test(str);
}
function validateEmail(inputText) {
  var mailFormat =  /\S+@\S+\.\S+/;
  if (!inputText.match(mailFormat)) {
    // alert("Valid address!");
    return true;
  } else {
    // alert("Invalid address!");
    return false;
  }
}
const Signup = () => {
  const history = useHistory();
  const [showpass,setShowpass]=useState(false);
  const [checkpass,setCheckpass]=useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    address: "",
  });
  let name, value;
  const handleInputs = (event) => {
    //console.log(event);
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  //we will use fetch API to post data which returns a promise
  const PostData = async (event) => {
    event.preventDefault();
    const { name, email, password, cpassword, phone, address } = user;

    const res = await fetch("/register", {
      //these key-value pair are similar to data or elements shown on postman while posting the data
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
        phone,
        address,
      }),
    });
    const data = await res.json();
    
    if(`${name}`==="") {toast.error("Enter Username")}
    // window.alert("Please enter username")
    else if(startsWithNumber(`${name}`)) toast("Invalid username")
    else if(`${email}`==="") toast("Please enter email")
    
    else if(validateEmail(`${email}`))  toast("Please enter valid email")
    else if(`${password}`==="") toast("Please enter password")
    else if(password.length<6) toast("Password length should be atleast 6")
    else if(!(`${password}`===`${cpassword}`)) toast("Password mismatch")
    else if(phone.length<10 ||phone.length<10) toast("Invalid Phone no.")
    else if (data.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    }
     else {
      
      console.log("Registration Successful");

      
      window.alert(`Registration Successful done`);
      history.push("/login");
    }
  };

  return (
    <>
      <section className="signup_reg" >
        <div className="container mt-1" >
          <div className="signup-content">
            
            <div className="signup-form row">
            <div className="signup-image col-md-6 mt-5 "  >
                <figure>
                  <img src={signpic}  alt="not found" />
                </figure>
                <NavLink to="/login" className="signup-image-link">
                <button className='btn btn-outline-primary btn1'> Already Registered?</button>
                </NavLink>
              </div>
              <div className="col-md-6" style={{backgroundColor:"lightgrey" ,textAlign:"center" ,borderRadius:"30px",paddingBottom:"20px",paddingTop:"20px" ,marginTop:"50px", marginBottom:"50px"}} >
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <h1 className="text-center"><b>Sign Up </b></h1>
            <hr />
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Your name here"
                      className="col-10"
                    ></input>
                  </div>

                  <br />
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Your email ID here"
                      className="col-10"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </label>
                    <div className="two">
                    <input
                      type={!showpass? "password":"text"}
                      name="password"
                      id="password"
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Enter your password"
                      className="col-10"
                    ></input>
                    <div className='showpass' onClick={()=>setShowpass(!showpass)}>
                {!showpass ? <FaEye/>:<FaEyeSlash/>}
            </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </label>
                    <div className='two'>
                    <input
                      type= {!checkpass? "password":"text"}
                      name="cpassword"
                      id="cpassword"
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Re-enter your password"
                      className="col-10"
                    ></input>
                    <div className='showpass' onClick={()=>setCheckpass(!checkpass)}>
                {!checkpass ? <FaEye/>:<FaEyeSlash/>}
            </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="fa fa-phone-square" aria-hidden="true"></i>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Your phone number here"
                      className="col-10"
                    ></input>
                  </div>

                  <br />
                  <div className="form-group">
                    <label htmlFor="address">
                      <i className="fa fa-briefcase" aria-hidden="true"></i>
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="off"
                      value={user.address}
                      onChange={handleInputs}
                      placeholder="Your address"
                      className="col-10"
                    ></input>
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="register"
                      id="register"
                      onClick={PostData}
                      className="form-submit btn btn-outline-primary"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              




            </div>
          </div>
        </div>
        <Footer/>
        <ToastContainer />
      </section>
      
    </>
  );
};

export default Signup;
