import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [data, setData] = useState('0');
  const [isLogin, setIsLogin] = useState(false);

  function handleClick() {
    fetch("http://taro.local/server/index.php", {
      method : 'POST',
      header : {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body : JSON.stringify({action : 1})
    })
    .then (response => response.text())
    .then (response => {
      // console.log(response);
      setData(response);
      if (data == '1') {
        setIsLogin(true);
      }
    })
  }

  useEffect(() => {
    handleClick()
  })

  return (
    <header>
      {/* {data} */}
      {isLogin 
        ?
        <ul>
          <li><a href="#">Личный кабинет</a></li>
          <li><a href="http://taro.local/server/logout.php">Выйти</a></li>
        </ul>
        :
        <ul>
          <li><a href="/login">войти</a></li>
          <li><a href="/registration">зарегистрироваться</a></li>
        </ul>
      }
    </header>
  )
}

export default Header