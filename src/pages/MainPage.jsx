import React, {useContext, useEffect} from 'react';

import SearchedChampions from "../components/SearchedChampions/SearchedChampions.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";

import {ChampionDataContext} from "../context/ChampionsDataContext.js";
import {CategoryContext} from "../context/CategoryContext.js";

const searchBarStyles = {
  input: {
    backgroundColor: "#EDEEF1",
    border: 'none',
    borderRadius: '0px',
    padding: '25px 20px',
    width: '100%',
    margin: '0px',
    color: 'black', //to change placehodler colro go to SearchBar/subComponents/style.css
  },
  button: {
    backgroundColor: "#05386b",
    border: 'none',
    borderRadius: '0 30px 30px 0 ',
    marginLeft: '-1px',
    fontSize: '1.7em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
  },
  autocomplete: {
    backgroundColor: "#EDEEF1",
  },
  category: {
    backgroundColor: "#05386b",
    borderRadius: '30px 0 0 30px',
    padding: '0 0 0 20px',
    border: 'none',
    color: 'white'
  }
}

const MainPage = () => {
  return ( 
    <div className="container-fluid">
      <div className="col-12 d-flex justify-content-center"> 
        <SearchBar currentStyles={searchBarStyles}/>
      </div>
      <SearchedChampions/>
    </div>
  )
}
 
export default MainPage;