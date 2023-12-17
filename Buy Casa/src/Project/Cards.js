import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Cards.css';
import MainPage from './MainPage';

function Cards() {
  return (
    <div>
      <div>
        <MainPage />
      </div>

      <div className="card-list">
        <CardItem
          imageSrc="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
          title="Buy"
          description="Effortlessly find and buy your dream home with Buy Casa."
        />

        <CardItem
          imageSrc="https://cpmnw.com/wp-content/uploads/2019/03/Commercial-Space.jpg"
          title="Rent"
          description="Buy Casa offers a comprehensive rental property"
        />

        <CardItem
          imageSrc="https://www.adviseable.com.au/wp-content/uploads/2017/09/investment-property.jpg"
          title="Invest"
          description="Invest wisely in real estate with Buy Casa"
        />
      </div>
    </div>
  );
}

const CardItem = ({ imageSrc, title, description }) => {
    const routePath = title.toLowerCase() === 'buy' ? '/Buypage' : (title.toLowerCase() === 'rent' ? '/Rentpage' : null);
  
    return (
      <div className="card-item">
        <img src={imageSrc} alt="Card Image" />
        <span className="role">{title}</span>
        <h3>{description}</h3>
  
        {routePath ? (
          <Link to={routePath} className="arrow">
            <img src="https://thumbs.dreamstime.com/b/right-arrow-vector-icon-black-symbol-navigation-163301987.jpg" alt="Arrow" />
          </Link>
        ) : (
          <div className="arrow">
            
            <img src="https://thumbs.dreamstime.com/b/right-arrow-vector-icon-black-symbol-navigation-163301987.jpg" alt="Arrow" />
          </div>
        )}
      </div>
    );
  };
  

export default Cards;
