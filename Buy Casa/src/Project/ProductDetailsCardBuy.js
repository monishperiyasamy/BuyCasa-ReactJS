import React from 'react';
import '../Styles/ProductDetailsCard.css'
const ProductDetailsCard= () => {
  return (
    <div className="cardcontainer">
  
      <div className="box one">
        <div className="details">
          <div className="topic">Details</div>
          <p className='productdetails2'>
         City:Singanallur , Coimbatore
          <br></br>
          Contact no :  8825583012
          <br></br>
          Area :7 Ar
          <br></br>
          Rent :20,000/month
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
           
            <div className="price">₹ 55.29 L</div>
          </div>
        </div>
        <div className="button1">
          <button>Buy Now</button>
        </div>
      </div>

     
      <div className="box two">
        <div className="image-box">
          <div className="image">
            <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="info">
            <div className="brand">TVH Vista Heights</div>
          
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default  ProductDetailsCard;
