import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {InputContext} from "../../../context/InputContext.js";
import {ChampionDataContext} from "../../../context/ChampionsDataContext.js";
import {AutocompleteContext} from "../../../context/AutocompleteContext.js";
import {CategoryContext} from "../../../context/CategoryContext.js";

export function filtrData(name, tags, currentCategory, inputValue) {
  if(currentCategory === 'All') {
    if(name.toLowerCase().startsWith(inputValue.toLowerCase())){ //consist of same characters input and name in ChampionsNameArr
      if(name.toLowerCase() !== inputValue.toLowerCase()){ //if names are same dont show autocoplete
       return true;
      }
    }
  }
  else {
    if(tags.includes(currentCategory)){
      if(name.toLowerCase().startsWith(inputValue.toLowerCase())){ //consist of same characters input and name in ChampionsNameArr
        if(name.toLowerCase() !== inputValue.toLowerCase()){ //if names are same dont show autocoplete
          return true;
        }
      }
    }
  }
  return false;
}

const Autocomplete = () => {
  const {inputValue, setInputValue} = useContext(InputContext); //use context from App.js <InputContext value={}/>
  const {shouldRenderAutocomplete, setShouldRenderAutocomplete} = useContext(AutocompleteContext);// use context from App.js <AutocompleteContext
  const ChampionsNameArr = useContext(ChampionDataContext);
  const {category} = useContext(CategoryContext);

  useEffect(()=> {
    
  },[inputValue])

  function showToolTips() {
    //filtr champion names arr to element which starts witn input value, both arguments are lower case, Dog => dog
    let names = ChampionsNameArr.filter((el)=> {
      const name = el[0];
      const tags = el[1].tags;
      return(filtrData(name, tags, category, inputValue))
    });
    //if filtered arr has more than 5 elements split to first, sordted by name elements
    if (names.length > 4 ){
      names = names.sort().slice(0,5)
    }
    return names.map(el => {
    const name= el[0];
    return(
    <Link  to={`/search/${category}/${name}`}
    className="list-group-item" 
      key={name}
      style={{padding: '10px 20px',}}
      onClick={() => {
        handleChooseOption(name);
      }}
    >
      {name}
    </Link>)
    })
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