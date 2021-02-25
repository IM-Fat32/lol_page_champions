import React,{useContext} from 'react';

import {CategoryContext} from "../../../context/CategoryContext.js";
import {InputContext} from "../../../context/InputContext.js";

import './style.css';

const SearchCategory = ({currentStyles}) => {
  //categories of champions in game
  const tagsArr = ['all','fighter', 'tank', 'mage', 'assassin', 'support', 'marksman'];

  const {setCategory} = useContext(CategoryContext);//context of category data from SearchBar component
  const {setInputValue} = useContext(InputContext);
  function toUpperFirstLetter(el) {
    const firstLetter = el[0].toUpperCase(); //first letter to upperCase
    return el = `${firstLetter}${el.substring(1)}`; //return ready word in format {bigletter}{rest of elements in string} dog => Dog
  }

  const handleOnChange = (e) => {
    const idx = e.target.selectedIndex; //selected element index
    const dataset = e.target.options[idx].value; //value of element with selected index
    setCategory(dataset);
    setInputValue("");
  }

  return ( 
  <select className='selectpicker'
    onChange={handleOnChange}
    style={
      currentStyles
    }
  >
  {/* Create elements of dropdown */}
  {
  tagsArr.map((el) => {
    return (
      <option className="option-picker" key={el}>
        {toUpperFirstLetter(el)}
      </option>
      )
    })
  }
    </select>
  );
}
 
export default SearchCategory;