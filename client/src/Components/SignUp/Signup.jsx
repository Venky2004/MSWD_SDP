import React from 'react'
import './signup.css'
import { Button,Typography } from '@mui/material'

const Signup = () => {
  return (
    <div>
        <div className="container signup_container">
            <div className="signup_details">
                <h1>Sign Up</h1>
                <form  className='signup_form'>
          <input type="text" name='name' placeholder='User Name' required />
          <input type="email" name='email' placeholder='E-Mail' required />
          <input type="password" name='Password' placeholder='Password' required />
          <Button variant="contained" sx={{ width: 150, height: 45,borderRadius: 5}}
          fullWidth
          color="secondary"
          className="button"
          >Sign Up</Button> 
           <Button variant='text' className='signup_link' sx={{color:"white"}}>Already Have a Account</Button> 
        </form>
            </div>
        </div>
    </div>
  )
}

export default Signup