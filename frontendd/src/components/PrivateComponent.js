import {React, useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom';



function PrivateComponent()
{
    const auth=localStorage.getItem('user');
    return auth?<Outlet/>:<Navigate to="/Signup"></Navigate>
}

export default PrivateComponent;