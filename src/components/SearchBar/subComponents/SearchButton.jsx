import React, {useContext} from 'react';

import {SearchDataFlagContext} from "../../../context/SearchDataFlagContext.js";

import {Button} from "react-bootstrap";
import {Icon} from '@iconify/react';
import searchIcon from '@iconify-icons/ant-design/search-outlined';

const SearchButton = ({currentStyles}) => {
  const {setIsSearchingActivated} = useContext(SearchDataFlagContext);  

  const handleSearchChampions = () => { //change flag if key is enter
    setIsSearchingActivated(true);
  }

  return (
    <Button 
      variant='primary'
      className='icon-wrapper' 
      onClick= {handleSearchChampions}
      style={
        currentStyles
      }
    >
      <Icon icon={searchIcon} />
    </Button>     
  );
}
 
export default SearchButton;