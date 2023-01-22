import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';

function App() {
  const [data, setData] = useState('');

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
      console.log(response);
      setData(response);
    })
  }
  
  return (
    <>
      {/* <button onClick={handleClick}>go</button>
      <div>{data}</div> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
    </>
  )
}
export default App;
