import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Productpage.css';

function Productpage() {
  const navigate =useNavigate();
  const handleViewMoreClick = () => {
   
    navigate('/view');
  };
  const properties = [
    {
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'TVH Vista Heights',
      location: 'Singanallur , Coimbatore',
      price: '₹ 55.29 L',
    },
    {
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Sattva Residency',
      location: 'Avinashi Road, Coimbatore',
      price: '₹ 50.85 L',
    },
    {
      image: 'https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Sree Dakshas',
      location: 'Saravanampatti , Coimbatore',
      price: '₹ 53.77 L',
    },
    {
      image: 'https://images.pexels.com/photos/8288954/pexels-photo-8288954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Sukra Majesticka Grande',
      location: 'Saibaba Colony , Coimbatore',
      price: '₹ 55.1 L',
    },
    {
      image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Sree Dakshas Macie',
      location: 'Vadavalli , Coimbatore',
      price: '₹ 77.39 L',
    },
    {
      image: 'https://images.pexels.com/photos/8031878/pexels-photo-8031878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'RR Harmony',
      location: 'Saibaba Colony , Coimbatore',
      price: 'ON REQUEST',
    },
  ];

  return (
    
    <div className="cwrapper">
      {properties.map((property, index) => (
     
        <div className="card" key={index}>

          <img src={property.image} alt="" />
          <div className="content">
            <div className="row">
              <div className="details">
                <span>{property.name}</span>
                <p>{property.location}</p>
              </div>
              <div className="price">{property.price}</div>
            </div>
            <div className="buttons">
              
              <button className={`buy-button-${index}`} onClick={handleViewMoreClick}>View More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productpage;
