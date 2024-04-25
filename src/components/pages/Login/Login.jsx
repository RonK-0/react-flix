import React from 'react'
import Header from '../../partials/Header'
import { PageTitle } from '../../helpers/functions-general';
import { LiaEye, LiaEyeSlash  } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';
import { PiTranslate } from "react-icons/pi";

const Login = () => {
    PageTitle('Login - Netflix')

    const navigate = useNavigate();
    const [hasValue, setHasValue] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [getEmail, setGetEmail] = React.useState('');
    const [getPassword, setGetPassword] = React.useState('');
    
    let email = "test@example.com";
    let password = "1234";

    const handleChange = (e) => {
        if(e.target.value  !== "" ){ setHasValue(true); setGetPassword(e.target.value) }
        else{ setHasValue(false); }
    }

    const handleGetEmail = (e) => setGetEmail(e.target.value)

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleCheckLogin = () => {
        if((getEmail === email) && (getPassword === password)){
            console.log("Positib");
            navigate('/home')
        } else{
            console.log("NOP");
        }
    }

    return (
        <>
            <div className="login bg-[url('../../img/login/bg-login.jpg')] h-full w-full bg-cover isolate relative">
                <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/50 z-[-1]"></div>
                <Header isLogin={true} className='w-full'/>

                <div className="form text-white py-12 f-col-center">
                    <div className='w-[450px] bg-black/70 rounded-md h-full p-16'>
                        <h1 className='text-3xl text-white mb-5 ft-b tracking-[0.05rem]'>Sign In</h1>
                        <form action="" className='f-col'>
                            <div className="input-wrapper">
                                <input type="email" name="Email" id="Email" required onChange={(e) => handleGetEmail(e)}/>
                                <label htmlFor="Email" >Email or mobile number</label>
                            </div>
                            <div className="input-wrapper">
                                <input type={showPassword ? "text" : "password"} name="Password" id="Password" required onChange={(e) => handleChange(e) } />
                                <label htmlFor="Password" >Password</label>
                                {hasValue && (<button type='button' className='text-white bg-transparent absolute ty-a right-3 text-lg hover:ring-8 ring-gray-600/60 rounded-full' onClick={handleShowPassword}>{showPassword ? <LiaEyeSlash /> : <LiaEye />}</button>)}
                            </div>

                            <button type='button' className='w-full p-2 rounded-md btn btn-accent text-base text-white' onClick={handleCheckLogin}>Sign In</button>

                            <span className='text-center my-3 uppercase text-white/70'>OR</span>

                            <button type='button' className='w-full p-2 rounded-md bg-white/20 text-base text-white'>Use a Sign-in Code</button>

                            <Link to={'#'} className='block text-center my-4 hover:underline text-base'>Forgot Password</Link>

                            <div className='mb-3 flex gap-2'><input type="checkbox" name="" id="" /> Remember Me</div>

                            <p className='mb-5 text-white/70'>New to Netflix? <Link to={'#'} className='ft-b text-white hover:underline'>Sign Up now.</Link></p>

                            <p className='text-xs text-balance text-white/60'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to={"#"} className='text-blue-600 hover:underline'>Learn more.</Link></p>
                        </form>
                    </div>
                </div>

                <div className='footer f-col gap-6 items-center px-6 py-8 bg-black/60'>
                    <div className='f-col gap-6 items-start w-5/6 mx-a'>
                        <Link to={'#'} className=''>Questions? Contact Us.</Link>
                        <div className="footer__links flex flex-wrap gap-y-4  w-full">
                        <Link to={'#'}>FAQ</Link>
                        <Link to={'#'}>Help Center</Link>
                        <Link to={'#'}>Terms of Use</Link>
                        <Link to={'#'}>Privacy</Link>
                        <Link to={'#'}>Cookie Preferences</Link>
                        <Link to={'#'}>Corporate Information</Link>
                        </div>
                        <button className='btn btn-btdark flex gap-2'><PiTranslate /> English</button>
                        <p className='text-sm text-white/70'>Netflix Philippines</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Login