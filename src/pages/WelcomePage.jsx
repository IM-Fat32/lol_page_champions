import React from 'react';

import SearchBar from "../components/SearchBar/SearchBar.jsx";

import {WelcomePageStylesContext} from "../context/WelcomePageStylesContext.js";

import image from '../images/mainBackground.jpg';

const welcomePageStyles = {
  divBackgroundColor: 'rgba(0,0,0,.3)',
  fontColor: '#f1f1f1',
  titleSize: '5em',
  descriptionSize: '1.5em',
  buttonLeftColor: '',
  buttonLeftFontColor: '',
  buttonRightColor: '#6699ff',
  buttonRightFontColor: '#fff',
  paddingButtons: '10px',
}

const searchBarStyles = {
  borderRadius: '',
}

const WelcomePage = () => {
  return (
    <div 
      className="d-flex flex-column justify-content-sm-center align-items-sm-center" 
      style={{
        height: '100vh', 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover'
      }}
    >
      <WelcomePageStylesContext.Provider value={{
        buttonColor: welcomePageStyles.buttonRightColor,
        fontColor: welcomePageStyles.buttonRightFontColor
      }}>
        <div
          className="d-flex flex-column justify-content-sm-center align-items-sm-center p-5"
          style={{
            backgroundColor: welcomePageStyles.divBackgroundColor
          }}
        >
          <h3 style={{
            fontSize: welcomePageStyles.titleSize,
            color: welcomePageStyles.fontColor
          }}>Welcome</h3>
          <h5 
            className="font-weight-light"
            style={{
              color: welcomePageStyles.fontColor,
              fontSize: welcomePageStyles.descriptionSize
            }}
          >
            Search for information about your favorite champion in League of Legends
          </h5>
          
          <SearchBar/>
          <div>
            <a 
              href="https://eune.leagueoflegends.com/" 
              className="btn btn-secondary m-4"
              style={{
                padding: welcomePageStyles.paddingButtons
              }}
            >
              Link to official website
            </a>
            <button 
              className="btn btn-primary m-4"
              style={{
                backgroundColor: welcomePageStyles.buttonRightColor,
                padding: welcomePageStyles.paddingButtons
              }}
            >
              Show me all champions
            </button>
          </div>
        </div>
      </WelcomePageStylesContext.Provider>
    </div>
  );
}
 
export default WelcomePage;