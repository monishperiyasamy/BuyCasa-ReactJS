import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/FilterPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default function FilterPage() {
  return (
    <div>
      <div>
      <header>
        <nav className="navbar">
          <h2 className="homelogo">
          BUY CASA
          </h2>
          <input type="checkbox" id="menu-toggler" />
          <div className='html'>
          <label htmlFor="menu-toggler" id="hamburger-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
            </svg>
          </label>
          </div>
        
          <div className="all-links">
          
            <div className="login-drop">
            <Link to="/">
        <button className='navbutt'>Home</button>
      </Link>
              
              
            </div>
            <div>
              <button className='navbutt' >About Us</button>
            </div>
            <div>
             
              <button className= 'navbutt' >Contact Us</button>
            </div>
            <div>
            <Link to ="/cards">  <button className='navbutt' onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faTimes} />
        </button></Link>
            </div>
          </div>
        </nav>
      </header>
      </div >
    <img id="vimvarbackground" src='https://us.123rf.com/450wm/praewpailin/praewpailin1809/praewpailin180900146/praewpailin180900146.jpg?ver=6' alt='Background'></img>
  
     <Link to="/Buypage">
     <button type={"button"} value={"button"} id="varbuy">Buy</button>
     </Link>
     <Link to="/Rentpage">
     <button type={"button"} value={"button"} id="varsell">Rent</button>
     </Link>
     <h4 className='varlook'>Looking to:</h4>
     <h4 className='varpro'>Property Type :</h4>
     <button type={"button"} value={"button"} id="varp1">House</button>
     <button type={"button"} value={"button"} id="varp2">Apartment</button>
     <button type={"button"} value={"button"} id="varp3">Villas</button>
     <button type={"button"} value={"button"} id="varp4">Room</button>
     <h4 className='varPrice'>Pricing:</h4>
     <input type={"range"} id="varpri" />
     <h4 className='varBedRoom'>BedRooms :</h4>
     <button type={"button"} value={"button"} id="varbe1">1 BHK</button>
     <button type={"button"} value={"button"} id="varbe2">2 BHK</button>
     <button type={"button"} value={"button"} id="varbe3">3 BHK</button>
     
     <button type={"button"} value={"button"} id="varbe4"> 3 BHK</button>
    
    
     <Link to="/Home">
     <button class="varclose-button" aria-label="Close alert" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button>
  </Link>
  
    </div>
  )
}
