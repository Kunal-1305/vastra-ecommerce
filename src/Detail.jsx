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
            <h2 className="product-price">${product.price}</h2>
          </div>
        </div>

        <div className="specs-section">
          <h3>Specifications</h3>
          <ul>
            <li><strong>ID:</strong> {product.id}</li>
            <li><strong>Color:</strong> {product.color}</li>
            <li><strong>Material:</strong> {product.material}</li>
            <li><strong>Size:</strong> {product.size}</li>
            <li><strong>Gender:</strong> {product.gender}</li>
            <li><strong>Care Instructions:</strong> {product.care}</li>
            <li><strong>Description:</strong> {product.description}</li>
            <li><strong>Details:</strong> {product.specs}</li>
          </ul>
          <button className="b2" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecipeDetail;
