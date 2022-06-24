import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };
  const Navigate=useNavigate();

  const showdetail = async (event) => {
    console.log(Email);
    console.log(Password);
    event.preventDefault();
      
        let result=await fetch("http://localhost:5000/Login",{
            method:"post",
            body:JSON.stringify({Email,Password}),
            headers:{
                "Content-Type":"application/json"
            
            },
        });
        result=await result.json();
        if(result.error)
        {
           alert("no user found");
        }
        else{

        
        
        localStorage.setItem('user', JSON.stringify(result));
        const auth=localStorage.getItem('user');
        if(auth)
        {
            Navigate("/");
        }

        window.location.reload()
        }
  };

  return (
    <>
      <div className="container">
        <form className=" container">
          <div className="form-group container">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={Email}
              onChange={getEmail}
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
              type="password"
              value={Password}
              onChange={getPassword}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            onClick={showdetail}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
