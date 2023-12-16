import React from 'react'
import '../Styles/Rent.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import RentProduct from './RentProduct';
import { useNavigate } from 'react-router-dom';

export default function Rentpage() {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
   
    navigate('/view1');
  };
  return (
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
            
            </div>
            <div>
              <Link to ='/filter'>
              <button className= 'navbutt' >Filter</button></Link>
            </div>
            <div>
              <button className= 'navbutt' >Contact Us</button>
            </div>
            <div>
             
              <input type="search" id="tinaSearch" placeholder="Search by City, Locality, Project, Landmark..." />
            </div>
            <div>
            <Link to ="/cards">  <button className='navbutt' onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faTimes} />
        </button></Link>
            </div>
          </div>
        </nav>
      </header>
      <div>
      <div className="Buypage">
      <div className="vjcontainer">
      <div className="vjbox">
        <div className="vjimage">
          <img src="https://dyimg2.realestateindia.com/prop_images/875758/511071_1.jpg" alt="Profile 1" />
        </div>
        <div className="vjname_job">Rating :5</div>
        <div className="vjrating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <p>
          Location : Singanallur , Coimbatore
        </p>
       
        <div className="vjbtns">
          <button onClick={handleViewMoreClick}>Read More</button>
          <button onClick={() => alert("Your Contact Request has Sent!")}>Contact</button>
        </div>
      </div>
      
      <div className="vjbox">
        <div className="vjimage">
          <img src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile 2" />
        </div>
        <div className="vjname_job">Rating: 4.5</div>
        <div className="vjrating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <p>
       Location: Saibaba Colony , Coimbatore
        </p>
        <div className="vjbtns">
          <button onClick={handleViewMoreClick}>Read More</button>
          <button onClick={() => alert("Your Contact Request has Sent!")}>Contact</button>
          
        </div>
      </div>
      <div className="vjbox">
        <div className="vjimage">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_LB-busnPBTqKCBzoXDWC_c6TWQiNF7ZMg&usqp=CAU" alt="Profile 3" />
        </div>
        <div className="vjname_job">Rating:4</div>
        <div className="vjrating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <p>
         Location:Ganapathy , Coimbatore
        </p>
        <div className="vjbtns">
          <button onClick={handleViewMoreClick}>Read More</button>
          <button onClick={() => alert("Your Contact Request has Sent!")}>Contact</button>
        </div>
        
      </div>
    </div>
        
        
    

        
        <Link to="/FilterPage">
         
        </Link>

        
        <h1 className='samTitle'>Crowd-Pleasing Properties</h1>
        
      </div>
      <div>
        <RentProduct/>
      </div>
      
      <div className='buyfooter'>
        <Footer/>
      </div>
     
      </div>
    
    </div>
  )
 
}