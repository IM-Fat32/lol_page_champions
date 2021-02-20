import React from 'react';

const SearchCategory = () => {

   //categories of champions in game
   const tagsArr = ['all','fighter', 'tank', 'mage', 'assassin', 'support', 'marksman'];

   function toUpperFirstLetter(el) {
    const firstLetter = el[0].toUpperCase(); //first letter to upperCase
    return el = `${firstLetter}${el.substring(1)}`; //return ready word in format {bigletter}{rest of elements in string} dog => Dog
  }

  return ( 
  <select 
  //   style=
  //     {{
  //       borderRadius: '30px 0 0 30px',
  //       padding: '0 0 0 20px',
  //       border: 'none',
  //       backgroundColor: currentStyle.componentsSecondary
  //     }}
  >
  {/* Create elements of dropdown */}
  {tagsArr.map((el) => {
                  return <option  key={el}>
                    {toUpperFirstLetter(el)}</option>
                    })
                  }
    </select>
  );
}
 
export default SearchCategory;