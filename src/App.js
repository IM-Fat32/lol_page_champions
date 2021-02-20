import React, {useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import cookie from 'react-cookies';

import CustomCookies from "./cookies/cookies.js";

import WelcomePage from "./pages/WelcomePage.jsx";
import SearchedChampions from "./components/SearchedChampions/SearchedChampions.jsx";

import {InputContext} from "./context/InputContext.js";
import {ChampionDataContext} from "./context/ChampionsDataContext.js";
import {AutocompleteContext} from "./context/AutocompleteContext.js";

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
  const [shouldRenderAutocomplete, setShouldRenderAutocomplete] = useState(true); //autocomplete shows if = true
  
  function getDataFromAPi (API) {
    fetch(API).then(data => data.json()).then(data => {
      setDataToContext(data.data)
    });
  };
  console.log(championsData)
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
    <Router>
      <Switch>
        <ChampionDataContext.Provider value={championsData}>
          <AutocompleteContext.Provider value={{shouldRenderAutocomplete, setShouldRenderAutocomplete}}>
            <InputContext.Provider value={{inputValue, setInputValue}}>
              <Route path="/">
                <WelcomePage/>
              </Route>
            </InputContext.Provider>
          </AutocompleteContext.Provider>
        </ChampionDataContext.Provider>
      </Switch>
    </Router>
  )
}

export default App;

