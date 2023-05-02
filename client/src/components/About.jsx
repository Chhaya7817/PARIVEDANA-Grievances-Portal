import React from 'react';
import { useEffect, useState } from 'react';

const About=()=>{
    //const history=useHistory();
    const [userData,setUserData] =useState();

    const callAboutPage=async()=>{
       try{
         const res = await fetch("/about",{
            method: "GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
         });
         const data=await res.json();
         setUserData(data);

         console.log(`this is useState daa: ${userData.name}`);
         if(!res.status===200){
             const error=new Error(res.err);
             throw error;
         }
       }catch(err){
           console.log(err);
           //history.push("/login");
       }
    }
    useEffect(()=>{
       callAboutPage();
    },[])
    
    if(userData){
        return(
            <>
            <div className="mx-4" style={{height:"87vh"}}>
            <h1 className='text-center my-2'>My Profile</h1>
            <hr />
            <form method="GET">
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>
            <h3 className="text-uppercase t" style={{"textDecoration":"underline"}}>Personal Information</h3>
            <h2>Name: <span>{userData.name}</span></h2>
            <h3>Address: {userData.address}</h3>
            
            </div>
            {/* <br></br>
             */}
             <div>
            <h3 className="text-uppercase " style={{"textDecoration":"underline"}}>Contact Information</h3>
            <h4>Phone: {userData.phone}</h4>
            <h4>Email: {userData.email}</h4>
            </div>
            </div>
            <br></br>
            <h3 className="text-uppercase text-center" style={{"textDecoration":"underline"}}>grievances</h3>
            <br />
                <table className="table-dark " style={{width:"100%"}}>
                <tr>
                    <th>Date</th>
                    <th>Department</th>
                    <th>Grievance</th>
                    <th>Status</th>
                    <th>Feedback</th>
                </tr>
                { userData.grievances.map((cval)=>{
                return <tr>
                <td>{cval.date}</td>
                <td>{cval.dept}</td>
                <td>{cval.grievance}</td>
                <td>{cval.status}</td>
                <td>{cval.feedback}</td>
                </tr> }) }
                </table>
                <br />
        </form> 
        </div>
        {/* <Footer/> */}
    </>
        );
    }
    else{
        return(
            <>
            <p className='maintext'>Unable to load data. Try to refresh or relogin.</p>
            </> 
        ); 
    }
}

export default About;