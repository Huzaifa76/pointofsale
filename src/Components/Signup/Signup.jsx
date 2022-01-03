import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import '../../assets/sign.css'

const Signup = () => {
    return (
        <>
         <div className='signup'>
            <div className="signup_inner">
                <h3>Sign Up</h3>
                <div className="username mb-3">
                    <span><PersonIcon/></span>
                    <input type="text" placeholder='Username' className='form-control' />
                </div>
                <div className="username mb-3">
                    <span><EmailIcon/></span>
                    <input type="email" placeholder='Email' className='form-control' />
                </div>
                <div className="password">
                    <span><KeyIcon/></span>
                    <input type="password" placeholder='Password' className='form-control' />
                </div>
                <button className='btn btn_signup'>Sign Up</button>
                <h6 className='account mt-4 text-muted'>Already Have An Account -<a href="#"> Sign In</a></h6>
                </div>  
        </div>
        </>
    )
}

export default Signup
