import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
import logo from "../images/flogo.png";
import "../styles/mix.css";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const [userData, setUserData] = useState();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      
      console.log(`this is useState data: ${userData?.name}`);
      if (res.status !== 200) {
        const error = new Error(res.err);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  function AvatarDropdown({ username, onLogout, onProfileClick }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
      setIsOpen(!isOpen);
      console.log(isOpen);
    }

    function handleProfileClick() {
      setIsOpen(false);
      onProfileClick();
    }

    function handleLogout() {
      setIsOpen(false);
      onLogout();
    }

    return (
      <div className="avatar-dropdown">
        <button className="avatar-button" onClick={handleToggle}>
          Welcome {userData.name}
        </button>
        {isOpen && (<li>
          <button onClick={handleLogout} ><NavLink to="./logout" >Logout </NavLink></button>
        </li>
          
        )
        
        
    }
      </div>
    );
  }

  const RenderMenu = () => {
    if (state) {
      return (
        <>
        <div style={{display:"flex",alignItems:"center"}}>
        <div style={{color:"white",textAlign:"center",paddingRight:"50px"}}>Welcome {userData.name}</div>
        <div style={{display:"flex"}}>
          <NavLink className="nav-item nav-link active" to="/">
            Home{""}
          </NavLink>
          
          <NavLink className="nav-item nav-link" to="/grievance">
            Grievance
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            Profile
          </NavLink>
          <NavLink className="nav-item nav-link" to="./logout" >Logout </NavLink>
          </div>
          {/* <AvatarDropdown
            username={userData.name}
            onLogout={() => console.log("logout")}
            onProfileClick={() => console.log("profile clicked")}
          /> */}
          </div>
        </>
      );
    } else {
      return (
        <div className="menu">
          <NavLink
            className="navi nav-item nav-link active"
            to="/"
            style={{ color: "#C8922E" }}
          >
            Home
          </NavLink>
          {/* <NavLink
            className="navi nav-item nav-link active"
            to="/contact"
            style={{ color: "#C8922E" }}
          >
            ContactUS
          </NavLink> */}
          <NavLink
            className="nav-item nav-link"
            to="/login"
            style={{ color: "#C8922E" }}
          >
            Login
          </NavLink>
          <NavLink
            className="nav-item nav-link "
            to="/signup"
            style={{ color: "#C8922E" }}
          >
            Signup
          </NavLink>
        </div>
      );
    }
  };
  return (
    <>
    
      <nav className="mynav navbar navbar-expand-lg navbar-dark  " style={{fontSize:"25px"}} >
      <NavLink className="nav-link k1" to="/" style={{color:"#C8922E",fontFamily:"Axiforma Heavy Italic",fontSize:"33px"}}>
        <div className="logosection">
          <div>
        <img src={logo} alt="not found" />
        </div>
          <div className="textlogo" >
            <p>PARIVEDANA</p> 
            <p style={{fontSize:"18px",position:"absolute",top:"40px"}}><small>Grievances Portal</small></p>
</div>
          </div>
        </NavLink>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto"  >
            <RenderMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar
