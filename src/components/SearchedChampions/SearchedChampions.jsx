import React, {useContext, useEffect, useState} from 'react';

import {ChampionDataContext} from "../../context/ChampionsDataContext.js";
import {CategoryContext} from "../../context/CategoryContext.js";
import {InputContext} from "../../context/InputContext.js";
import {SearchDataFlagContext} from "../../context/SearchDataFlagContext.js";

const SearchedChampions = () => {
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
  },[isSearchingActivated])
 
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
  
  function getHTMLElements(arr) {
    return arr.map(el => (
      <div 
        key={el[0]}
        className="col-12 col-sm-6 col-lg-4 pt-4 m-4 card"
        style={{
          minWidth: '360px', 
          boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)',
          border: 'none'
      }}
      >
        <h5 className="card-title">{el[0]}</h5>
        <p className='card-subtitle mb-3' >{el[1].title}</p>
        <img 
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${el[0]}_0.jpg`} 
          alt={el[1].image.full}
          className="img-fluid"
          style={{
            borderRadius: '20px'
          }}
        />
        <p className="mt-3">
        {el[1].tags.map(el => (
          <span>{el} </span>
        ))}
        </p>
      </div>
    ))
  }

  return (
    <>
      <h3 style={{padding: '0 10px'}}>{currentData[1]}</h3>
      <div className="row container-fluid m-auto card-deck justify-content-center">
        {getHTMLElements(getFilteredData())}
      </div>  
    </>
  );
}
 
export default SearchedChampions;