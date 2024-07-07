import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleSearch } from '../utils/searchSlice';
import { LOGO_IMAGE } from "../utils/constants";
import { LangOptions } from "../utils/constants";
import { setLang } from "../utils/configSlice";


const Header = () => {
    const navigate = useNavigate();
    const data = useSelector((state) => state.user)
    const search = useSelector((state) => state.search.searchPage);

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
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
    }, [])

    const handleSearch = () => {
        dispatch(toggleSearch());
    }

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
                    {search
                        &&
                        <select 
                        className=" text-black rounded"
                        onChange={(e) => {
                            dispatch(setLang(e.target.value))
                        }}>
                            {
                                LangOptions.map((val) => <option key={val.options} value={val.value}>{val.options}</option>)
                            }
                        </select>
                    }
                    <button
                        className="font-bold text-white  bg-red-700 px-4 py-2 rounded"
                        onClick={handleSearch}>
                        {search ? "HOME" : "Ask GPT?"}
                    </button>
                    <button
                        className="font-bold text-white border-2  bg-black px-4 py-2 rounded uppercase"
                        onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )
}

export default Header