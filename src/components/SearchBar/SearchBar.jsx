import React, {useEffect, useContext, useState} from 'react';
import { Redirect } from 'react-router-dom'

import {InputContext} from "../../context/InputContext.js";
import {SearchDataFlagContext} from "../../context/SearchDataFlagContext.js";
import {CategoryContext} from "../../context/CategoryContext.js";

import {Form, Container, InputGroup, Row} from "react-bootstrap";

import SearchInput from "./subComponents/SearchInput.jsx";
import SearchCategory from "./subComponents/SearchCategory.jsx";
import SearchButton from "./subComponents/SearchButton.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({currentStyle}) => {
  const [isSearchingActivated, setIsSearchingActivated] = useState(false); // redirect to page if true
  const [category, setCategory] = useState('All'); //categorry of searching
  const {inputValue} = useContext(InputContext); //input value from SearchBar

  useEffect(()=>{
    setIsSearchingActivated(false);
  },[inputValue, isSearchingActivated, category])//re-render if input value or flag to redirect changes
  return (
    <>
    {/* redirect to main page if isSearchingActivated is true*/}
     {isSearchingActivated ? 
        <Redirect to={`/search/${category}/${inputValue}`}/> 
        : 
        null
      }
      <Container className="m-4">
        <Form>
          <Row>
            <InputGroup>
              <SearchDataFlagContext.Provider value={{setIsSearchingActivated}}>
                <CategoryContext.Provider value={{category, setCategory}}>
                  <SearchCategory/>
                  <SearchInput/>
                </CategoryContext.Provider>
                <SearchButton/>
              </SearchDataFlagContext.Provider>
            </InputGroup>
          </Row>
        </Form>
      </Container>
    </>
  );
}
 
export default SearchBar;