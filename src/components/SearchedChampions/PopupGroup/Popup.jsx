import React from 'react';

import './style.css';

const Popup = ({props}) => {
  const data = props.activeCard[1];
  const callback = props.setActiveCard;
  console.log(data)

  const handleClick = () => {
    callback([]);
  }
  document.body.style.setProperty('--root', '300');
  return (
    <>
      <div className='Popup--container'>
        <div className="popup-title--wrapper">
          <h4>{data.name}</h4>
          <h5>{data.title}</h5>
        </div>
        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`}  alt=""/>
      </div>  
      <div className='background--container' onClick={handleClick}></div>
    </>
  );
}
 
export default Popup;