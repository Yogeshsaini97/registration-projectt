import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'  

function Navbar()
{

const auth=localStorage.getItem('user');
let comp;
let update="block";

const Navigate=useNavigate();


const clearall=()=>
{
  localStorage.clear();
  Navigate("/Signup");
  window.location.reload();

}

if(auth)
{
comp= <li className="nav-item">
<Link className="nav-link" onClick={clearall} to="/Logout">Logout ({JSON.parse(auth).Name})</Link>
</li> 
update="block";

}
else{
 comp= <><li className="nav-item">
  <Link className="nav-link" to="/Signup">Signup</Link>
</li>
 <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li></>
update="none";

 

}






    return(<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" style={{display:update}} to="/" >Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" style={{display:update}}  to="/">Home <span className="sr-only">(current)</span></Link>
       
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{display:update}} to="/About">About</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" style={{display:update}} to="/AddProduct">AddProduct</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{display:update}} to="/ShowProduct">ShowProducts</Link>
      </li>
     {comp}
      </ul>
   
  </div>
</nav>


    </>)
}

export default Navbar;