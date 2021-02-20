import React from 'react';

import {Button} from "react-bootstrap";
import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/ant-design/search-outlined';

const SearchButton = () => {
  return (
    <Button 
      variant='primary'
      className='icon-wrapper' 
        // style={{
        //   backgroundColor: currentStyle.componentsSecondary,
        //   border: 'none',
        //   borderRadius: '0 30px 30px 0 ',
        //   fontSize: '1.7em',
        //   display: 'flex',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        //   padding: '0 20px'
        // }}
    >
      <Icon icon={searchIcon} />
    </Button>       
  );
}
 
export default SearchButton;