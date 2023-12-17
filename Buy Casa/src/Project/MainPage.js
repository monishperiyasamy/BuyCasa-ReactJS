// MainPage.js
import React from 'react';
import '../Styles/MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

class MainPage extends React.Component {
  render() {
    return (
      <div className='container'>
        
        <div className='navbody'>
          <header className="header">
            <a className="logo">BuyCasa</a>
            <nav className="navbar">
              <a href="/">Home</a>
              <a href="#">About</a>
              <a href="#">Settings</a>
              <a href="#">Profile</a>
              <a><FontAwesomeIcon icon={faBell} size="2x" /></a>
            </nav>
            
          </header>
        </div>
        <div>
          <Footer/>
        </div>
       
      </div>
    );
  }
}

export default MainPage;
