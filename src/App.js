import React, {useState, useEffect} from 'react';

import cookie from 'react-cookies';

import CustomCookies from "./cookies/cookies.js";

import './App.css';


const App = () => {
  const nameCattegoryCookies = 'history'; //name of category in cookies
  const [stateCookies, setStateCookies] = useState([]); //local state of current cookies
  const CurrentCookies = new CustomCookies(nameCattegoryCookies);
  
  useEffect(() => {
    setStateCookies(cookie.load(nameCattegoryCookies));
  }, []);

  const handleCLick = () => {
    CurrentCookies.addNewElementToCookies("El");
    setStateCookies(cookie.load(nameCattegoryCookies))
  }

  return (
    <p onClick={handleCLick}> 
      asdasdasd
    </p>
  )
}

export default App;

