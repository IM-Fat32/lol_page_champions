import React, {useContext, useEffect} from 'react';

import SearchedChampions from "../components/SearchedChampions/SearchedChampions.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";

import {ChampionDataContext} from "../context/ChampionsDataContext.js";
import {CategoryContext} from "../context/CategoryContext.js";


const MainPage = () => {
  return ( 
    <div className="container-fluid">
      <div className="col-12 d-flex justify-content-center"> 
        <SearchBar/>
      </div>
      <SearchedChampions/>
    </div>
  )
}
 
export default MainPage;