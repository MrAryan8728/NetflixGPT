import { useState, useRef } from 'react'
import Header from './Header'
import Validate from '../utils/validate'
import { auth } from '../utils/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BG_IMAGE } from '../utils/constants'

const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [message, setMessage] = useState("");
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleSubmit = () => {
        //Validation of the form data.
        const msg = Validate(email.current.value, password.current.value);
        setMessage(msg);
        if (msg) return;
        //Proceed to Sign In or Sign Up
        if (isSignIn) {
            //SignIn hai
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("Login ho gya hai : ");
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorCode + "-" + errorMessage);
                });
        } else {
            //SignUp hai
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value
                      }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid:uid, email:email, displayName: displayName }));
                        navigate('/browse');
                      }).catch((error) => {
                        // An error occurred
                        setMessage(error);
                      });
                    const user = userCredential.user;
                    console.log("Account ban gaya hai : ");
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorCode + "-" + errorMessage);
                });
        }
    }
  return (
    <div>
           <Header />
            <div className='absolute'>
                <img
                    src={BG_IMAGE}
                    alt='bg-image' />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='absolute p-12 w-3/12 mx-auto bg-opacity-80 bg-black my-36 right-0 left-0 text-white rounded'>

                <h1 className=' text-4xl font-bold mb-5'>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignIn
                    &&
                    <input
                        ref={name} 
                        type='text'
                        placeholder='Your Full Name'
                        className=' px-2 py-2 bg-black bg-opacity-20 w-full border-white border-2 rounded' />
                }

                <input
                    ref={email}
                    type='text'
                    placeholder='Enter your Email'
                    className=' px-2 py-2 bg-black bg-opacity-20 my-5 w-full border-white border-2 rounded' />

                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className=' px-2 py-2 bg-black bg-opacity-20 w-full border-white border-2 rounded' />

                <h1 className=' font-semibold text-red-600 mt-3'>{message}</h1>

                <button onClick={handleSubmit} className='text-center w-full px-2 py-2 bg-red-600 font-semibold my-5 rounded'>{isSignIn ? "Sign In" : "Sign Up"}
                </button>

                {isSignIn ?
                    <h1>New to Netflix?
                        <span className=' font-bold cursor-pointer mx-1' onClick={
                            () => {
                                setIsSignIn(!isSignIn);
                            }
                        }>
                            Sign Up
                        </span>
                        now
                    </h1> :
                    <h1>
                        Already have an account?
                        <span className=' font-bold cursor-pointer mx-1' onClick={
                            () => {
                                setIsSignIn(!isSignIn);
                            }
                        }>
                            Sign In
                        </span>
                    </h1>
                }
            </form>
    </div>
  )
}

export default Login