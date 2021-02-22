import React, {useContext, useEffect} from 'react';

import {ChampionDataContext} from "../../context/ChampionsDataContext.js";
import {CategoryContext} from "../../context/CategoryContext.js";
import {InputContext} from "../../context/InputContext.js";

import {filtrData} from '../../components/SearchBar/subComponents/Autocomplete.jsx';


const SearchedChampions = () => {
  
  const {championsData} = useContext(ChampionDataContext);
  const {category} = useContext(CategoryContext);
  const {inputValue} = useContext(InputContext);

  const pathname = window.location.pathname;
  const basicPath = '/search';
  let currentData = pathname.slice(basicPath.length, pathname.length);
  currentData = currentData.split('/');
  
  function showChampions() {
    championsData.filter(el => {
      filtrData()
    })
  }
  return (
    <h3>{currentData[1]}</h3>
  );
}
 
export default SearchedChampions;