import React from 'react'
import './registration.css'

const Registration = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form name="form-reg" action="http://taro.local/server/registration.php" method="GET" className="loginBox">
            <input placeholder="Имя" className="loginInput" name="login"/>
            <input placeholder="Почта" className="loginInput" />
            <input placeholder="Пароль" className="loginInput" name="password1" type="password"/>
            <input placeholder="Пароль заново" className="loginInput" name="password2" type="password"/>
            <button type="submit" className="loginButton">Зарегистрироваться</button>
            <a className="loginRegisterButton" href="/login">
              Войти в акканут
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration