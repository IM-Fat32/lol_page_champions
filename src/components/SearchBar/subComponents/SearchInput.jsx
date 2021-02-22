import React, {useContext} from 'react';
import {Form} from "react-bootstrap";
import {InputContext} from "../../../context/InputContext.js";
import {AutocompleteContext} from "../../../context/AutocompleteContext.js";

import Autocomplete from "./Autocomplete.jsx";

import {SearchDataFlagContext} from "../../../context/SearchDataFlagContext.js"
import {CategoryContext} from "../../../context/CategoryContext.js"

import {Col} from "react-bootstrap";

const SearchInput = () => {
  const {inputValue, setInputValue} = useContext(InputContext); //use context from App.js <InputContext value={}/>
  const {setShouldRenderAutocomplete} = useContext(AutocompleteContext);// use context from App.js <AutocompleteContext
  const {setIsSearchingActivated} = useContext(SearchDataFlagContext);
  

  const handleChangeInputValue = () => { //handle change value inside input and push it to context value <InputContext/>
    const currentValue = document.getElementById('input-search').value;  //read value DOM element to variable
    setInputValue(currentValue); //set value to context InputContext
    setShouldRenderAutocomplete(true);
  }
  const handleEnterPressed = (e) => { //change flag if key is enter
    if(e.keyCode === 13){
      setIsSearchingActivated(true);
      e.preventDefault();
    }
  }

  return ( 
    <Col style={{position: 'relative', padding: '0px'}}>
      <Form.Control  
      id= 'input-search'
      type='text' 
      className='form-control' 
      placeholder='Place hero name here!'
      onKeyDown= {handleEnterPressed}
      value={inputValue}
      style={{
      //   borderColor: currentStyle.componentsMain,
      //   backgroundColor: currentStyle.componentsMain,
        border: 'none',
        borderRadius: '0px',
        padding: '25px 20px',
        width: '100%',
        margin: '0px'
      }}
      onChange={handleChangeInputValue}
      />
        <Autocomplete/>
    </Col>
  );
}
 
export default SearchInput;