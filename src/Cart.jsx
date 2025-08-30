import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);
  }, []);

  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header />
      <div style={{ padding: "40px" }}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} style={{ marginBottom: "20px", listStyle: "none" }}>
                  <img src={item.photo} alt={item.recipe} style={{ width: "100px" }} />
                  <p><strong>{item.recipe}</strong></p>
                  <p>Price:Rs {item.price}</p>
                  <button className="b2" onClick={() => removeItem(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="b2" onClick={clearCart}>Clear Cart</button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
