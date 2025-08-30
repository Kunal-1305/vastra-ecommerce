import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function RecipeDetail() {
  const { state } = useLocation();
  const product = state?.product;

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.recipe} added to cart!`);
  };

  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <Header />
      <div className="recipe-detail-container">
        <div className="product-detail-layout">
          <img
            src={product.photo}
            alt={product.recipe}
            className="product-detail-image"
          />
          <div className="product-info-section">
            <h1 className="product-name">{product.recipe}</h1>
            <h2 className="product-price">RS {product.price}</h2>
            <h3>Specifications</h3>
          
            <p>ID: {product.id}</p>
            <p>Color: {product.color}</p>
            <p>Material: {product.material}</p>
            <p>Size: {product.size}</p>
            <p>Gender: {product.gender}</p>
            <p>Care Instructions: {product.care}</p>
            <p>Description: {product.description}</p>
            <p>Details: {product.specs}</p>
          
          <button className="b2" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        
      </div>
      <Footer />
    </>
  );
}

export default RecipeDetail;
