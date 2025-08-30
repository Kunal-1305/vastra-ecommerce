import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Content() {
  const navigate = useNavigate();

  var images = [
    "s1.gif" ,
    "s7.jpg",
    "s5.jpg"
  ];
  var [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    var interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slide">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <div className="content">
        
            <p>Top Selling Products for you</p>
            <h2 className="t1">Products</h2>


            <div className="product-grid">
  <div className="product-card">
    <img src="product1.jpg" alt="Product 1" />
    <div className="product-info">
      <p className="product-name">Shirt</p>
      <p className="product-price">Rs 1999</p>
      <p className="product-rating">⭐ 4.5</p>
    </div>
  </div>

  <div className="product-card">
    <img src="product6.jpg" alt="Product 2" />
    <div className="product-info">
      <p className="product-name">T-Shirt</p>
      <p className="product-price">Rs 2499</p>
      <p className="product-rating">⭐ 4.8</p>
    </div>
  </div>

  <div className="product-card">
    <img src="product3.jpg" alt="Product 3" />
    <div className="product-info">
      <p className="product-name">Pants</p>
      <p className="product-price">Rs 1500</p>
      <p className="product-rating">⭐ 4.2</p>
    </div>
  </div>

  <div className="product-card">
    <img src="product4.jpg" alt="Product 4" />
    <div className="product-info">
      <p className="product-name">Jeans</p>
      <p className="product-price">Rs 1849</p>
      <p className="product-rating">⭐ 4.6</p>
    </div>
  </div>

  <div className="product-card">
    <img src="product5.jpg" alt="Product 5" />
    <div className="product-info">
      <p className="product-name">Joggers</p>
      <p className="product-price">Rs 2999</p>
      <p className="product-rating">⭐ 4.9</p>
    </div>
  </div>
</div>

<div className="view-all-container">
  <button className="view-all-button" onClick={() => navigate("/all-products")}>View All Products</button>
</div>

        <hr />
      </div>
    </>
  );
}

export default Content;
