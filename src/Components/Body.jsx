import Header from './Header'
import React, { useState } from 'react'

const Body = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg'
                    alt='bg-image' />
            </div>
            <form className='absolute p-12 w-3/12 mx-auto bg-opacity-80 bg-black my-36 right-0 left-0 text-white'>
                <h1 className=' text-4xl font-bold mb-5'>{isSignIn ? "Sign In":"Sign Up"}</h1>
                {!isSignIn && <input type='text' placeholder='Your Full Name' className=' px-2 py-2 bg-black bg-opacity-20 w-full border-white border-2 rounded' />}
                <input type='text' placeholder='Email or mobile number' className=' px-2 py-2 bg-black bg-opacity-20 my-5 w-full border-white border-2 rounded' />
                <input type='password' placeholder='Password' className=' px-2 py-2 bg-black bg-opacity-20 w-full border-white border-2 rounded' />
                <button className='text-center w-full px-2 py-2 bg-red-600 font-semibold my-5 rounded'>{isSignIn ?"Sign In":"Sign Up"}</button>
            {isSignIn?
            <h1>New to Netflix? <span className=' font-bold cursor-pointer' onClick={
                () => {
                    setIsSignIn(!isSignIn);
                }
            }>Sign Up</span> now</h1> :
            <h1>Already have an account? <span className=' font-bold cursor-pointer' onClick={
                () => {
                    setIsSignIn(!isSignIn);
                }
            }>Sign In</span></h1>}
            </form>
        </div>
    )
}

export default Body