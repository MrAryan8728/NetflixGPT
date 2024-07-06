import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO_IMAGE } from "../utils/constants";


const Header = () => {
    const navigate = useNavigate();
    const data = useSelector((state) => state.user)

    //Implement signout with the profile photoupdate and name update and fix the bug of loading data delay.
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //User is signed In
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid:uid, email:email, displayName: displayName }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
    }, [])
    return (
        <div className='z-10 w-[100%] absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
            <img
                className='w-44'
                src={LOGO_IMAGE}
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