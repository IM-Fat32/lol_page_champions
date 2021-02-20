import React, {useContext} from 'react';
import {ChampionDataContext} from "../../context/ChampionsDataContext.js";
import {InputContext} from "../../context/InputContext.js";

const SearchedChampions = () => {
  const championsData = useContext(ChampionDataContext);
  const {inputValue, setInputValue} = useContext(InputContext); //use context from App.js <InputContext value={}/>
  return (
    <p>{championsData.inputValue}</p>
  );
}
 
export default SearchedChampions;