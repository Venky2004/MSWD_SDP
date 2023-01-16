import { Button ,Typography,Paper,ButtonGroup} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Google from '../../Assets/Images/google.png';
import Apple from '../../Assets/Images/apple.png';
import Facebook from '../../Assets/Images/facebook.png';
import Twitter from '../../Assets/Images/twitter.png';
import './login.css'


function Login() {
  return (
<section id="contact">
      <div className='container login_container'>
      <Typography style={{ letterSpacing: 15, fontFamily: 'sans-serif', fontSize: 25, marginTop: 45 }}><b>WELCOME</b></Typography>
        <form  className='login_form'>
          <input type="email" name='email' placeholder='User Name' required />
          <input type="password" name='Password' placeholder='Password' required />
          <Button variant="contained" sx={{ width: 150, height: 45,borderRadius: 5}}
          fullWidth
          color="secondary"
          className="button"
          >Login</Button>
          <Typography>OR LOGIN WITH</Typography>
            <center> 
           <ButtonGroup variant=""  sx={{width:300}} 
           className='login_icons'
          >
               <Button><img src={Google}  alt="Google"  className='login_icon'/></Button>
               <Button><img src={Facebook} alt="Facebook" className='login_icons' /></Button>
               <Button><img src={Apple}  alt="Apple" className='login_icons'/></Button>
               <Button><img src={Twitter} alt="Twitter" className='login_icons'/></Button>
           </ButtonGroup>
           <Button variant='text' className='login_link'>Forgot Password</Button>
            <Button variant="text" className='login_link'>Don't have an account?Register Here</Button></center>  
        </form>
      </div>
    </section>
  );
}

export default Login;