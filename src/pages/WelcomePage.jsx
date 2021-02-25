import React from 'react';
import {Link} from 'react-router-dom';

import SearchBar from "../components/SearchBar/SearchBar.jsx";

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
  input: {
    backgroundColor: "#EDEEF1",
    border: 'none',
    borderRadius: '0px',
    padding: '25px 20px',
    width: '100%',
    margin: '0px',
    color: 'black', //to change placehodler colro go to SearchBar/subComponents/style.css
  },
  button: {
    backgroundColor: welcomePageStyles.buttonRightColor,
    border: 'none',
    borderRadius: '0 30px 30px 0 ',
    marginLeft: '-1px',
    fontSize: '1.7em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
  },
  autocomplete: {
    backgroundColor: "#EDEEF1",
  },
  category: {
    backgroundColor: welcomePageStyles.buttonRightColor,
    borderRadius: '30px 0 0 30px',
    padding: '0 0 0 20px',
    border: 'none',
    color: 'white'
  }
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
          
          <SearchBar currentStyles={searchBarStyles}/>
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
            <Link
              to='/search/All/'
              className="btn btn-primary m-4"
              style={{
                backgroundColor: welcomePageStyles.buttonRightColor,
                padding: welcomePageStyles.paddingButtons
              }}
            >
              Show me all champions
            </Link>
          </div>
        </div>
    </div>
  );
}
 
export default WelcomePage;