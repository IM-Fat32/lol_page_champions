import React, {useEffect, useContext} from 'react';

import {InputContext} from "../../context/InputContext.js";

import {Form, Container, InputGroup, Row} from "react-bootstrap";

import SearchInput from "./subComponents/SearchInput.jsx";
import SearchCategory from "./subComponents/SearchCategory.jsx";
import SearchButton from "./subComponents/SearchButton.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({currentStyle}) => {
  const {inputValue} = useContext(InputContext);

  useEffect(()=>{
    
  },[inputValue])

  return (
      <Container className="m-4">
        <Form>
          <Row>
            <InputGroup>
              <SearchCategory/>
              <SearchInput/>
              <SearchButton/>
            </InputGroup>
          </Row>
        </Form>
      </Container>
  );
}
 
export default SearchBar;