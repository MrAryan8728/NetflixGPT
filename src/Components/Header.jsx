import { useState } from "react"
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


const Header = () => {
    const navigate = useNavigate();
    const data = useSelector((state) => state.user)

    //Implement signout with the profile photoupdate and name update and fix the bug of loading data delay.
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='z-10 w-[100%] absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
            <img
                className='w-44'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logo'
            />
            {data
                && <div className=" flex h-10 gap-4 text-white mt-1">
                    <h1 className=" mt-2">HELLO, {data.displayName}</h1>
                    <button className="font-bold  bg-red-700 px-4 py-2 rounded uppercase" onClick={handleSignOut}>Sign Out</button>
                </div>
            }
        </div>
    )
}

export default Header