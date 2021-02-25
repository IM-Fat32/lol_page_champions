import React, {useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom'

import {InputContext} from "../../context/InputContext.js";
import {SearchDataFlagContext} from "../../context/SearchDataFlagContext.js";
import {CategoryContext} from "../../context/CategoryContext.js";

import {Form, Container, InputGroup, Row} from "react-bootstrap";

import SearchInput from "./subComponents/SearchInput.jsx";
import SearchCategory from "./subComponents/SearchCategory.jsx";
import SearchButton from "./subComponents/SearchButton.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({currentStyles}) => {
  const {isSearchingActivated, setIsSearchingActivated} = useContext(SearchDataFlagContext); // redirect to page if true
  const {inputValue} = useContext(InputContext); //input value from SearchBar
  const {category, setCategory} = useContext(CategoryContext);

  useEffect(()=>{
    setIsSearchingActivated(false);
  },[inputValue, isSearchingActivated, setIsSearchingActivated])//re-render if input value or flag to redirect changes
  return (
    <>
    {/* redirect to main page if isSearchingActivated is true*/}
     {isSearchingActivated ? 
        <Redirect to={`/search/${category}/${inputValue}`}/> 
        : 
        null
      }
      <Container className="m-4" style={{zIndex: '999'}}>
        <Form>
          <Row>
            <InputGroup>
                <CategoryContext.Provider value={{category, setCategory}}>
                  <SearchCategory currentStyles={currentStyles.category}/>
                  <SearchInput 
                    currentStyles={{
                      inputStyles: currentStyles.input, 
                      autocompleteStyles: currentStyles.autocomplete
                    }}
                  />
                </CategoryContext.Provider>
                <SearchButton currentStyles={currentStyles.button}/>
            </InputGroup>
          </Row>
        </Form>
      </Container>
    </>
  );
}
 
export default SearchBar;