
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Styles/ProductView.css';
import ProductDetailsCard from './ProductDetailsCardBuy';


const YourComponent = () => {
 
  const [currentIndex] = useState(4);
  
  const [cartCount, setCartCount] = useState(0);

  
  const images = [
    'https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/04/01/27/window-1796736_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/23/00/56/bathroom-1851566_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336164_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/05/23/16/office-1078869_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/10/20/15/26/samos-997876_1280.jpg',
  ];

  
  const addToCart = () => {
    setCartCount(cartCount + 1); 
    alert('Project added to cart!'); 
  };

  
  useEffect(() => {
   
    const carousel = document.querySelector('.carousel');

   
    let isDragStart = false,
      isDragging = false,
      prevPageX,
      prevScrollLeft,
      positionDiff;

   
    const showHideIcons = () => {
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      carousel.nextElementSibling.style.display =
        carousel.scrollLeft === scrollWidth ? 'none' : 'block';
    };

    
    const autoSlide = () => {
      const firstImgWidth = carousel.firstElementChild.clientWidth + 14;
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= scrollWidth - firstImgWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += firstImgWidth;
      }

      showHideIcons();
    };

    
    const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = carousel.scrollLeft;
    };

    
    const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      isDragging = true;
      carousel.classList.add('dragging');
      positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
      showHideIcons();
    };

  
    const dragStop = () => {
      isDragStart = false;
      carousel.classList.remove('dragging');

      if (!isDragging) return;
      isDragging = false;
      autoSlide();
    };

   
    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('touchstart', dragStart);

    document.addEventListener('mousemove', dragging);
    carousel.addEventListener('touchmove', dragging);

    document.addEventListener('mouseup', dragStop);
    carousel.addEventListener('touchend', dragStop);

    
    autoSlide();

    
    return () => {
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('touchstart', dragStart);

      document.removeEventListener('mousemove', dragging);
      carousel.removeEventListener('touchmove', dragging);

      document.removeEventListener('mouseup', dragStop);
      carousel.removeEventListener('touchend', dragStop);
    };
  }, []);

  return (
    <div>
   
      <header>
        <nav className="navbar">
          <h2 className="homelogo">BUY CASA</h2>
          <input type="checkbox" id="menu-toggler" />
          <div className="html">
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
                <button className="navbutt">Home</button>
              </Link>
            </div>
            <div>
              <button className="navbutt">About Us</button>
            </div>
         
            <div>
              <span className="navbutt" onClick={addToCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="cart-count">{cartCount}</span>
              </span>
            </div>
            <div>
             
                <button
                  className="navbutt"
                  onClick={() => window.history.back()}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              
            </div>
          </div>
        </nav>
      </header>

      <div className='detail'>
      <ProductDetailsCard/>
     </div>
      <div></div>
      <div className="wrapper">
       
        <div className="carousel">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img-${index + 1}`}
              draggable="false"
              className={index === currentIndex ? 'active' : ''}
            />
          ))}
        </div>
        <div id="right" className="fa-solid fa-angle-right" />
      </div>

    
      <p className='instruction'>
        Double-tap on the image to see the next one!
      </p>
      <button className='cart' onClick={addToCart}>
        Add to Cart
      </button>
    
      

    </div>
  );
};


export default YourComponent;
