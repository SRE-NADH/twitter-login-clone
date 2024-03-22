import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
 const navigate = useNavigate();

  return (
    <div className='login'>
      <div>
      <img src="./public/twitter-logo-4 1.png" alt="" />
      <h1>Log in to Twitter</h1>
      <input type='text' placeholder='Phone number, email adress'/>
      <input type="text" placeholder="Password"/>
      <button>Log In</button>
      <div className='login-footer'>
        <p>Forgot password?</p>
        <p onClick={()=>{navigate("/sign-up")}}>Sign up to Twitter</p>
      </div>
      </div>

    </div>
  )
}

export default LoginPage