import React, {useContext} from 'react';


import {WelcomePageStylesContext} from "../../../context/WelcomePageStylesContext.js"
import {SearchDataFlagContext} from "../../../context/SearchDataFlagContext.js"

import {Button} from "react-bootstrap";
import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/ant-design/search-outlined';

const SearchButton = () => {
  const currentStyle = useContext(WelcomePageStylesContext);  
  const {setIsSearchingActivated} = useContext(SearchDataFlagContext);  

  const handleSearchChampions = () => { //change flag if key is enter
    setIsSearchingActivated(true);
  }

  return (
    <Button 
      variant='primary'
      className='icon-wrapper' 
      onClick= {handleSearchChampions}
      style={{
        backgroundColor: currentStyle.buttonColor,
        color: currentStyle.fontColor,
        border: 'none',
        borderRadius: '0 30px 30px 0 ',
        marginLeft: '-1px',
        fontSize: '1.7em',
        //   display: 'flex',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        padding: '0 20px'
      }}
    >
      <Icon icon={searchIcon} />
    </Button>     
  );
}
 
export default SearchButton;