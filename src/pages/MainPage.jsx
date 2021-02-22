import React, {useContext} from 'react';

import SearchedChampions from "../components/SearchedChampions/SearchedChampions.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";

import {ChampionDataContext} from "../context/ChampionsDataContext.js";
import {CategoryContext} from "../context/CategoryContext.js";


const MainPage = () => {
  return ( 
    <>
      <SearchBar/>
      <SearchedChampions name='sas'/>
    </>
  )
}
 
export default MainPage;