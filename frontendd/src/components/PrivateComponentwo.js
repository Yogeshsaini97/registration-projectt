import {React, useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom';



function PrivateComponentwo()
{
    const auth=localStorage.getItem('user');
    return !auth?<Outlet/>:<Navigate to="/Home"></Navigate>
}

export default PrivateComponentwo;