import React, {useContext} from 'react';

import {InputContext} from "../../../InputContext.js";
import {ChampionDataContext} from "../../../ChampionsDataContext.js";

const Autocomplete = () => {
  const {inputValue} = useContext(InputContext); //use context from App.js <InputContext value={}/>
  const tmpData = useContext(ChampionDataContext);

  const ChampionsNameArr = Object.keys(tmpData);

  function showToolTips() {
    //filtr champion names arr to element which starts witn input value, both arguments are lower case, Dog => dog
    let names = ChampionsNameArr.filter((name)=> name.toLowerCase().startsWith(inputValue.toLowerCase()));
    //if filtered arr has more than 5 elements split to first, sordted by name elements
    if (names.length > 4 ){
      names = names.sort().slice(0,5)
    }
    return names.map(name => <option>{name}</option>)
  }
  
  function isLengthEnought(len) {
    if(len > 0) {
      return true;
    }
    return false;
  }

  return (
    <>
      {isLengthEnought(inputValue.length) ? 
      <ul>
        {showToolTips() }
      </ul>
      : 
      null}
    </>
  );
}
 
export default Autocomplete;