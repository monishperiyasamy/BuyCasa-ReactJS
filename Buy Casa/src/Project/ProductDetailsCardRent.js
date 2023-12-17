import React from 'react';
import '../Styles/ProductDetailsCard.css'
const ProductDetailsCardRent= () => {
  return (
    <div className="cardcontainer">
  
      <div className="box one">
        <div className="details">
          <div className="topic">Details</div>
          <p className='productdetails2'>
          Property ID :158149122102
          <br></br>
          Notice period :1 Month
          <br></br>
          Rental agreement  duration :24 months
          <br></br>
          Furnishing :Semifurnished
          <br></br>
          Rent :20,000/month
          <br></br>
          Layout :2BHK , 3 Baths
          <br></br>
            
          </p>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="price-box">
           
            <div className="price">₹ 20,000/month</div>
          </div>
        </div>
        <div className="button1">
          <button>Approach Now</button> 
        </div>
      </div>

     
      <div className="box two">
        <div className="image-box">
          <div className="image">
            <img src="https://dyimg2.realestateindia.com/prop_images/875758/511071_1.jpg" alt="" />
          </div>
          <div className="info">
            <div className="brand">Sattva Residency</div>
          
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default  ProductDetailsCardRent;
