import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='app'>
        <div className='image-container'>
          <img src="/images/back-twitter 1.png" alt="" />
        </div>
        
        <div className='main-content'>
          <img src="/images/twitter-logo-4 1.png" alt=""  />
          <h1>Happening now</h1>
          <h2>Join Twitter today</h2>
          <div className='buttons'>
            <div> <img src='/images/google-icon 1.png' width={20} /> Sign up with Google</div>
            <div><img src='/images/logo-apple 1.png' width={20} />Sign up with Apple</div>
            <div onClick={()=>{navigate('/sign-up')}} >Sign Up with phone or email</div>
          </div>
          <p>By singing up you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, <span>including Cookie Use</span>.</p>
          <p onClick={()=>{navigate('/login')}} id='login'>Already have an account? <span>Log in</span></p>
        </div>
      </div>
      <div className='footer'>
        <p>About</p>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Ads info</p>
        <p>Blog</p>
        <p>Carrres</p>
        <p>Brand Resources</p>
        <p>Advertising</p>
        <p>Marketing</p>
        <p>Twitter for business</p>
        <p>Developers</p>
        <p>Directory</p>
        <p>Settings</p>
        <p>@2021 Twitter, Inc.</p>
      </div>
    </div>
  )
}

export default Home