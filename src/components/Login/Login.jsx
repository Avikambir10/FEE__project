import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="container-2">
      <h1>Log in</h1>
      <p>
      Welcome back! Please enter your credentials to access your account.
      <br/>
      Your privacy and security are our top priorities.
      </p>
      <div className='login-box'>
        <div className='content-left'>
        <h3>JOIN THE CLUB. GET<br/>GET REWARDED.</h3>
        <p>JOIN ADICLUB. GET REWARDED TODAY.</p>
            <li>Free delivery</li>
            <li>A 15% off voucher for your next purchase</li>
            <li>Access to Members Only products and sales</li>
            <li>Access to adidas Running and Training apps</li>
            <li>Special offers and promotions</li>
            <p>Join now to start earning points, reach new levels and unlock<br/>
            more rewards and benefits from adiClub.</p>
        </div>
        <div className='login-right'>
          <h3>Log in</h3>
          <form>
            <div className='input-row'>
              <div className='input-group'>
                <label>Email</label>
                <input type='email' placeholder='example@example.com'></input>
              </div>
            </div>
            <div className='input-row'>
              <div className='input-group'>
                <label>Password</label>
                <input type='password'></input>
              </div>
            </div>
            <button className='submit-btn' type='submit'>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
