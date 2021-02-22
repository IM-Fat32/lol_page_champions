import React,{useContext} from 'react';

import {CategoryContext} from "../../../context/CategoryContext.js";
import {InputContext} from "../../../context/InputContext.js";

const SearchCategory = () => {
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
  <select className="md-form"
  onChange={handleOnChange}
  style={{
    borderRadius: '30px 0 0 30px',
    padding: '0 0 0 20px',
    border: 'none',
  //       backgroundColor: currentStyle.componentsSecondary
  }}
  >
  {/* Create elements of dropdown */}
  {
  tagsArr.map((el) => {
    return (
      <option  key={el}>
      {toUpperFirstLetter(el)}
      </option>
      )
    })
  }
    </select>
  );
}
 
export default SearchCategory;