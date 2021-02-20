import React, {useState, useEffect, useReducer} from 'react';

import cookie from 'react-cookies';

import CustomCookies from "./cookies/cookies.js";

import SearchBar from "./components/SearchBar/SearchBar.jsx";

import {InputContext} from "./InputContext.js";
import {ChampionDataContext} from "./ChampionsDataContext.js";

import './App.css';

const webStyles = {
  normal: {
    main: '#f1f1f1',
    secondary: '#dedede',
    componentsMain: 'yellow',
    componentsSecondary: 'red'
  },
  dark: {
    main: '#010101',
    secondary: '#ededed',
    componentsMain: 'yellow'
  }
}

const App = () => {
  const API = "http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json";
  const [currentStyle, setCurrentStyle] = useState(webStyles.normal) //current style for page
  const [stateCookies, setStateCookies] = useState([]); //local state of current cookies
  const [inputValue, setInputValue] = useState('');  //input value from search bar
  const [championsData, setChampionsData] = useState('');  //input value from search bar

  function getDataFromAPi (API) {
    fetch(API).then(data => data.json()).then(data => {
      setDataToContext(data.data)
    });
  };

  function setDataToContext(data){
    setChampionsData(data);
 };
  const nameCattegoryCookies = 'history'; //name of category in cookies
  
  const CurrentCookies = new CustomCookies(nameCattegoryCookies); //instance of cookies class

  useEffect(() => {
    setStateCookies(cookie.load(nameCattegoryCookies));
    getDataFromAPi(API)
  }, []);

  const handleCLick = () => {
    CurrentCookies.addNewElementToCookies("El");
    setStateCookies(cookie.load(nameCattegoryCookies));
  }

  return (
    <ChampionDataContext.Provider value={championsData}>
      <InputContext.Provider value={{inputValue, setInputValue}}>
        <p onClick={handleCLick}> 
          asdasdasd
        </p>
        <SearchBar currentStyle={currentStyle}/>
      </InputContext.Provider>
    </ChampionDataContext.Provider>
  )
}

export default App;

