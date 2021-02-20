import React, {useContext, useState, useEffect} from 'react';

import {InputContext} from "../../../context/InputContext.js";
import {ChampionDataContext} from "../../../context/ChampionsDataContext.js";
import {AutocompleteContext} from "../../../context/AutocompleteContext.js";

const Autocomplete = () => {
  const {inputValue, setInputValue} = useContext(InputContext); //use context from App.js <InputContext value={}/>
  const {shouldRenderAutocomplete, setShouldRenderAutocomplete} = useContext(AutocompleteContext);// use context from App.js <AutocompleteContext
  const tmpData = useContext(ChampionDataContext);
  const ChampionsNameArr = Object.keys(tmpData);

  useEffect(()=> {
    
  },[inputValue])

  function showToolTips() {
    //filtr champion names arr to element which starts witn input value, both arguments are lower case, Dog => dog
    let names = ChampionsNameArr.filter((name)=> {
      if(name.toLowerCase().startsWith(inputValue.toLowerCase())){ //consist of same characters input and name in ChampionsNameArr
        if(name.toLowerCase() !== inputValue.toLowerCase()){ //if names are same dont show autocoplete
          return true;
        }
      }
      return false;
    });
    //if filtered arr has more than 5 elements split to first, sordted by name elements
    if (names.length > 4 ){
      names = names.sort().slice(0,5)
    }
    return names.map(name => 
    <li className="list-group-item"
      key={name}
      style={{padding: '10px 20px',}}
      onClick={() => {
        handleChooseOption(name);
      }}
    >
      {name}
    </li>)
  }

  function handleChooseOption(name) {
    setInputValue(name);
    setShouldRenderAutocomplete(false);
  }
  
  function isLengthEnought(len) {
    if(len > 0) {
      return true;
    }
    return false;
  }

  return (
    <div style={{
        position: 'absolute', 
        top: '110%', 
        width: '100%',
    }}>
      {isLengthEnought(inputValue.length) && shouldRenderAutocomplete ? 
      <ul className="list-group" style={{borderRadius: '0px'}}>
        {showToolTips() }
      </ul>
      : 
      null}
    </div>
  );
}
 
export default Autocomplete;