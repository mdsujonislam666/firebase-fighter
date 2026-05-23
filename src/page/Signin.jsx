
import { Link } from 'react-router';
import MyContainer from '../components/MyContainer';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';

const googleProvider =  new GoogleAuthProvider();


const Signup = () => {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(null);

    const handleSignin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password).then(res => {
            console.log(res);
            toast.success("Signin Successful");
            setUser(res.user);
        })
            .catch((e) => {
                console.log(e);
                toast.error(e.message);
            })

    }

    const handleSignout = () =>{
        signOut(auth).then(()=>{
            toast.success("SignOut successful");
            setUser(null);
        }).catch((e)=>{
            toast.error(e.message);
        })
    }

    const handleGoogleSignin = () =>{
        signInWithPopup(auth, googleProvider).then(res =>{
            console.log(res);
            setUser(res.user);
            toast.success("Google Signin Successful")
        })
        .catch((e) =>{
            toast.error(e.message);
        })
    };

    return (

        <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 h-screen">
            <MyContainer>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-10 p-6 lg:p-10 text-white'>
                    <div className='max-w-lg text-center lg:text-left'>
                        <h3 className='text-3xl font-bold drop-shadow-lg'>Welcome Back</h3>
                        <p className='mt-4 text-lg text-white/80 leading-relaxed'>join our community and unlock exclusive features. your journey begins here!</p>
                    </div>
                    <div className='w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8'>
                        <h2 className='text-2xl font-semibold mb-6 text-center text-white'>Sign In</h2>

                        {user ? (<div className='text-center space-y-3'>
                            <img src={user?.photoURL || "https://via.placeholder.com/88"} alt="" className='h-20 rounded-full w-20 mx-auto' />
                            <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
                            <p className='text-white/80'>{user?.email}</p>
                            <button onClick={handleSignout} className='btn w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200'>Sign Out</button>
                        </div>) :
                            (<form onClick={handleSignin} className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-medium mb-1'>Email</label>
                                    <input type="email" name='email' placeholder='email@email.com' className='input input-bordered w-full bgwhite/20 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400' />
                                </div>
                                <div className='relative'>
                                    <label className='block text-sm font-medium mb-1'>Password</label>
                                    <input type={show ? "text" : "password"} name='password' placeholder='email@email.com' className='input input-bordered w-full bgwhite/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 text-black' />

                                    <span onClick={() => setShow(!show)} className="absolute text-black right-[8px]
                                                                 top-[36px] cursor-pointer z-50 ">
                                        {show ? <IoEye /> : <IoEyeOff />}
                                    </span>
                                </div>
                                <button type='submit' className='btn w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200 cursor-pointer'>Login</button>

                                <div className='flex gap-2 items-center justify-center my-2'>
                                    <div className='h-px w-16 bg-white/30'></div>
                                    <span className='text-sm text-white/70'>Or</span>
                                    <div className='h-px w-16 bg-white/30'></div>
                                </div>
                                {/* Google */}
                                <button onClick={handleGoogleSignin} className="btn cursor-pointer bg-white text-black border-[#e5e5e5] w-full">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                                <div>
                                    <p>Don't have an account?{""}
                                        <Link to="/signup" className='text-pink-300 hover:text-white font-medium underline'>Sign in</Link>
                                    </p>
                                </div>
                            </form>)}

                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Signup;