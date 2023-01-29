import React from 'react'
import './UserLogin.css'

function UserLogin() {
    return (
        <div className="login">
            <span className="loginTitle">Member Login</span>
            <form className="loginForm">
                <label>Username/Email *</label>
                <input className="loginInput" type="text" placeholder="Enter your email..." />
                <label>Password  *</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
            </form>
            <div className='login-bottom'>
                <a href="#" className='forgotPassword'>Forgot password?</a>
                <a href='#' className='noAccount'>Don't have an account?</a>
            </div>
        </div>
    )
}

export default UserLogin