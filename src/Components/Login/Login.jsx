/** @format */

import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import "../../assets/login.css";
import axios from "axios";
let url = "https://opentdb.com/api.php?amount=10";
const Login = () => {
  const handleClick = async () => {
      try {
          const res= await fetch(url)
          const data=await res.json()
          console.log(data)
        //   const res= await axios.get(url);
        //   console.log(res.data)
      } catch (error) {
          console.log(error.message)
      }

  };
  return (
    <>
      <div className="login">
        <div className="login_inner">
          <h3>Login</h3>
          <div className="username mb-3">
            <span>
              <PersonIcon />
            </span>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
            />
          </div>
          <div className="password">
            <span>
              <KeyIcon />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <h6 className='forget_password mt-2'><a href="#">Forget Password</a></h6>
          <button onClick={handleClick} className="btn btn_login">
            Login
          </button>
            <h6 className='account mt-4 text-muted'>Already Have An Account -<a href="#"> Sign Up</a></h6>

        </div>
      </div>
    </>
  );
};

export default Login;
