import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"


function Signup()
{
   const [Name,setName]=useState("");
   const [Email,setEmail]=useState("");
   const [Password,setPassword]=useState("");

   const getName=(event)=>
   {
     setName(event.target.value);

   }

   const Navigate=useNavigate();

//    useEffect(()=>
//    {
//     const auth=localStorage.getItem('user');
//     if(auth)
//     {
//         Navigate("/Logout");
//     }
//    })

   const getEmail=(event)=>
   {
    setEmail(event.target.value);
    
   }

   const getPassword=(event)=>
   {

    setPassword(event.target.value);
   }

  

   const collectData=async (event)=>
   {
    event.preventDefault();
        console.log(Name);
        console.log(Email);
        console.log(Password);
        let result=await fetch("http://localhost:5000/Register",{
            method:"post",
            body:JSON.stringify({Name,Email,Password}),
            headers:{
                "Content-Type":"application/json"
            
            },
        });
        result=await result.json()
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result));
        const auth=localStorage.getItem('user');
        if(auth)
        {
            Navigate("/");
        }

        window.location.reload()
        
    

   }



   



    return (
      <>
        <div className="container">
          <form className="container">
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
              value={Name}
              onChange={getName}
                type="name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
              value={Email}
              onChange={getEmail}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
              value={Password}
              onChange={getPassword}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" onClick={collectData} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
}

export default Signup;
