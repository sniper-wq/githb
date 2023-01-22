import React from 'react';
import "./login.css";

const Login = () => {
  return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Lamasocial.
            </span>
          </div>
          <form name="form-reg" action="http://taro.local/server/login.php" method="GET" className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" name="login"/>
              <input placeholder="Password" className="loginInput" name="password" />
              <button className="loginButton">Log In</button>
              {/* <span className="loginForgot">Forgot Password?</span> */}
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login