import React from 'react'
import '../Login/login.scss'
import {NavLink} from 'react-router-dom'

export default function login() {
  return (
    <>
        <div className="login">
        <div className='card'>
            <div className='left'>
              <h1>Welcome to HiveHub</h1>
              <p>HiveHub: Your vibrant social hive. Connect, share, and thrive in our buzzing community. Join us today!</p>
              <span>Don't have an account ?</span>
              <NavLink to="/register">
                   Register
                </NavLink>
            </div>
            <div className='right'>
              <h1>Login</h1>
              <form action="">
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Passsword' />
                <span>Forgot Password ?</span>
                <NavLink to="/login">
                    Login
                </NavLink>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}
