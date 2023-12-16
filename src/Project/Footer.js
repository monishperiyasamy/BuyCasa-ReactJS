import React from 'react'
import'../Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
// import {useNavigate} from 'react-router-dom';

function Footer() {
  
  
  const handleclick = (url) => {
    window.location.href ="https://www.facebook.com/";
  };

  
  const handleclick2 = (url) => {
    window.location.href ="https://www.instagram.com/";
  };
  const handleclick3 = (url) => {
    window.location.href ="https://twitter.com/?lang=en";
  };
  const handleclick4 = (url) => {
    window.location.href ="https://github.com/monishperiyasamy";
  };
  return (
    <div className='footercol'>

        
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
        
         
           
            <p className='terms-cond'>
           
                Terms and Conditions
                </p>
           
        
         
        </div>
        <div className="footer-column">
         
          <ul className="footer-list-quick">
            <li className="footer-list-item">
            </li>
            
            <li className="footer-list-item">
          FAQ
        
            </li>
            <li className="footer-list-item">
              
              Privacy Policy 
            
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Connect with Us :</h4>
          <ul className="social-icons">

            <li className="social-icons-item" onClick={handleclick}>
              
               <FontAwesomeIcon icon={faFacebook} />
           
            </li>
            <li className="social-icons-item">
              
              <FontAwesomeIcon icon={faInstagram} onClick={handleclick2} />
     
            </li>
            
            <li className="social-icons-item">
            
             
           <FontAwesomeIcon icon={faTwitter} onClick={handleclick3} />
           
            </li>
            <li className="social-icons-item" onClick={handleclick4}>
            
           <FontAwesomeIcon icon={faGithub} />
           
            </li>
          </ul>
        </div>
      </div>
  
    </footer>

    </div>
  )
}

export default Footer
