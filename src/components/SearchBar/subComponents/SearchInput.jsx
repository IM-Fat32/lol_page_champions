import React, {useContext} from 'react';
import {Form} from "react-bootstrap";
import {InputContext} from "../../../InputContext.js";

const SearchInput = () => {
  const {inputValue, setInputValue} = useContext(InputContext); //use context from App.js <InputContext value={}/>
  const handleChangeInputValue = () => { //handle change value inside input and push it to context value <InputContext/>
    const currentValue = document.getElementById('input-search').value;  //read value DOM element to variable
    setInputValue(currentValue); //set value to context InputContext
  }

  return ( 
    <Form.Control 
    id= 'input-search'
    type='text' 
    className='has-feedback custom-input' 
    placeholder='Place hero name here!'
    value={inputValue}
    // style={{
    //   borderColor: currentStyle.componentsMain,
    //   backgroundColor: currentStyle.componentsMain,
    //   height: '50px',
    //   padding: '0 20px'
    // }}
    onChange={handleChangeInputValue}
  />
  );
}
 
export default SearchInput;