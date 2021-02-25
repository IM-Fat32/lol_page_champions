import React, {useContext, useEffect, useState} from 'react';

import {ChampionDataContext} from "../../context/ChampionsDataContext.js";
import {CategoryContext} from "../../context/CategoryContext.js";
import {InputContext} from "../../context/InputContext.js";
import {SearchDataFlagContext} from "../../context/SearchDataFlagContext.js";


import Card from './Card.jsx';
import Popup from './Popup.jsx';


const SearchedChampions = () => {
  const [activeCard, setActiveCard] = useState([]);
  const ChampionsNameArr = useContext(ChampionDataContext);
  const {category} = useContext(CategoryContext);
  const {inputValue} = useContext(InputContext);
  const {isSearchingActivated} = useContext(SearchDataFlagContext);

  const [currentData, setCurrentData] = useState('');

  useEffect(()=>{
    const pathname = window.location.pathname;
    const basicPath = '/search';
    let currentData = pathname.slice(basicPath.length, pathname.length);
    currentData = currentData.split('/');
    setCurrentData(currentData);
  },[isSearchingActivated, activeCard])
  console.log(activeCard)
  const elementsToShow = getHTMLElements(getFilteredData());
  

  function getFilteredData() {
    const dataToShow = ChampionsNameArr.filter(el => {
      try{
        const name = el[0].toLowerCase();
        const tags = el[1].tags;
        const category = currentData[1];
        const championName = currentData[2].toLowerCase();
  
        if(category === 'All' && championName === '') {
          return true;
        }
        else if(category === 'All'  && name.startsWith(championName)) {
          return true
        }
        else if(tags.includes(category) && championName === '') {
          return true
        }
        else if(tags.includes(category) && name.startsWith(championName)) {
          return true
        }
        return false;
      }
      catch {
        return false;
      }
      
    })
    return dataToShow;
  }

  function handleClick(){
    setActiveCard(this.championData)
  }
  
  function getHTMLElements(arr) {
    return arr.map(el => {
      return <Card props={{el, handleClick}} key={el[0]}/>
    })
  }

  return (
    <>
      {activeCard.length ? <Popup/> : null}
        <h3 style={{padding: '0 10px'}}>{currentData[1]}</h3>
        <div className="row container-fluid m-auto card-deck justify-content-center">
          {elementsToShow}
        </div>  
    </>
  );
}
 
export default SearchedChampions;