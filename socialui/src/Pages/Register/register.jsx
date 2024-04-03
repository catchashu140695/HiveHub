import React from 'react'
import '../Register/register.scss'
import {NavLink} from 'react-router-dom'

export default function register() {
  return (
    <>
      <div className="register">
        <div className='card'>
            <div className='left'>
              <h1>Welcome to HiveHub</h1>
              <p>HiveHub: Your vibrant social hive. Connect, share, and thrive in our buzzing community. Join us today!</p>
              <span>Already have an account ?</span>
              <NavLink to="/login">
                    Login
                </NavLink>
            </div>
            <div className='right'>
              <h1>Register</h1>
              <form action="">
                <input type='text' placeholder='Username' />
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Passsword' />                
                <span>Forgot Password ?</span>                
                <NavLink to="/register">Register</NavLink>               
              </form>
            </div>
        </div>
      </div>
    </>
  )
}
