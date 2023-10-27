import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const LogOut = () => {
        localStorage.clear();
        navigate("/login")
    }
    return (
        <div className='text-center'>
            <Link to="/login" onClick={LogOut}>
                LogOut ( {auth && JSON.parse(auth).name} )
            </Link>
        </div>
    )
}

export default Profile
