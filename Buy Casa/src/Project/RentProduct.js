import React from 'react';
import '../Styles/Productpage.css';
import { useNavigate } from 'react-router-dom';
function RentProduct() {
  const navigate =useNavigate();

  
  const handleViewMoreClick = () => {
   
    navigate('/view1');
  };
  const properties = [
    {
      image: 'https://cdn.pixabay.com/photo/2016/10/16/09/19/florida-1744694_1280.jpg',
      name: 'TVH Vista Heights',
      location: 'Singanallur , Coimbatore',
      price: '₹ 55.29 L',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2018/04/07/03/06/real-estate-3297625_1280.jpg',
      name: 'Sattva Residency',
      location: 'Avinashi Road, Coimbatore',
      price: '₹ 50.85 L',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
      name: 'Sree Dakshas',
      location: 'Saravanampatti , Coimbatore',
      price: '₹ 53.77 L',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/09/27/15/40/estate-1698671_1280.jpg',
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
      image: 'https://cdn.pixabay.com/photo/2017/10/06/04/33/new-housing-development-2821968_1280.jpg',
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
              <button className={`buy-button-${index}` } onClick={handleViewMoreClick}>View More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RentProduct;
