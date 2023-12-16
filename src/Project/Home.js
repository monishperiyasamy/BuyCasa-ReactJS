import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import Footer from './Footer';

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <h2 className="homelogo">
          BUY CASA
          </h2>
          <input type="checkbox" id="menu-toggler" />
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
          <div className="all-links">
          
            <div className="login-drop">
            <Link to="/login">
        <button className='navbutt'>Login</button>
      </Link>
              
              
            </div>
            <div>
              <button className='navbutt' onClick={() => window.location.href = '#about'}>About Us</button>
            </div>
            <div>
              <button className='navbutt' onClick={() => window.location.href = '#contact'}>Contact Us</button>
            </div>
            <div>
              <button className='navbutt' onClick={() => window.location.href = '#services'}>Services</button>
            </div>
          </div>
        </nav>
      </header>
      
      <section className="homepage" id="home">
        <div className="content">
          <div className="text">
            <h1>Buy Casa</h1>
            <p>
              Buy Casa is a sophisticated real estate app, streamlining property exploration with user-friendly features, <br></br>
               ensuring a smooth journey for users to find, purchase, or rent their ideal homes effortlessly."
            </p>
            <div>
      
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
  <h2>About Buy Casa</h2>
  <p>Discover the dedicated team behind Buy Casa and how we revolutionize real estate management.</p>
  <div className="row company-info">
    <h3>Our Team</h3>
    <ul>
      <li>Monisha Periyasamy - Real Estate Manager</li>
      <li>Priyadharshini  -Assistant Real Estate Manager</li>
      <li>Vimal Varshini Rajendran- Property Specialist</li>
      <li>Samyuktha A Mohan- Operations Manager</li>
      <li>Tina Anthony - Assistant Operations Manager</li>
    </ul>
  </div>
  <div className="row mission-vision">
    <h3>Our Mission</h3>
    <p>
      At Buy Casa, our mission is to redefine real estate experiences through innovative solutions.
      We are committed to streamlining property transactions and ensuring a seamless journey for our users.
    </p>
    <h3>Our Vision</h3>
    <p>
      Our vision is to be a trailblazer in the real estate industry, optimizing processes and enhancing user satisfaction.
      We strive to provide a platform that simplifies property transactions and elevates the overall real estate experience.
    </p>
  </div>
</section>

<section class="services" id="services">
  <h2>Our Services</h2>
  <p>Explore the diverse offerings of Buy Casa for a seamless real estate experience.</p>
  <ul class="cards">
    <li class="card">
      <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="img"/>
      <h3>Residential Properties</h3>
      <p>Discover comfort and style in our extensive range of residential properties.</p>
    </li>
    <li class="card">
      <img src="https://cpmnw.com/wp-content/uploads/2019/03/Commercial-Space.jpg" alt="img"/>
      <h3>Commercial Spaces</h3>
      <p>Find the perfect location for your business with our versatile commercial spaces.</p>
    </li>
    <li class="card">
      <img src="https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2022/09/Land-for-sale.webp" alt="img"/>
      <h3>Land Acquisition</h3>
      <p>Invest in the future with our prime land offerings for development or investment purposes.</p>
    </li>
    <li class="card">
      <img src="https://www.baymgmtgroup.com/wp-content/uploads/2015/11/shutterstock_1534882181.jpg" alt="img"/>
      <h3>Rental Properties</h3>
      <p>Experience flexibility in living arrangements with our curated selection of rental properties.</p>
    </li>
    <li class="card">
      <img src="https://www.adviseable.com.au/wp-content/uploads/2017/09/investment-property.jpg" alt="img"/>
      <h3>Real Estate Investment</h3>
      <p>Grow your wealth through strategic real estate investments with Buy Casa.</p>
    </li>
    <li class="card">
      <img src="https://dldmuionqjz51.cloudfront.net/wp-content/uploads/2022/02/Amplifying-User-Experience-with-Experience-Consulting-Services.png" alt="img"/>
      <h3>Consultation Services</h3>
      <p>Receive expert guidance with our real estate consultation services for informed decision-making.</p>
    </li>
  </ul>
</section>



      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <div className="row">
          <div className="col information">
            <div className="contact-details">
              <p><i className="fas fa-map-marker-alt"></i> 123 Kovaipudur, Coimbatore - 638312</p>
              <p><i className="fas fa-envelope"></i> info@buycasa.com</p>
              <p><i className="fas fa-phone"></i> (123) 9944-0067</p>
            </div>
          </div>
          <div className="col form">
            <form>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <textarea placeholder="Message*" required></textarea>
              <button id="submit" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
