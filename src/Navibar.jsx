import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import data from './data.json'
import React from "react";
import { useNavigate } from "react-router-dom";





function Navibar() {
  const navRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/cart");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
useEffect(() => {
  const loginStatus = localStorage.getItem("isLoggedIn") === "true";
  setIsLoggedIn(loginStatus);
}, []);

  
  var [x, setX]=useState('');
  var [r, setR]=useState([]);


  function show() {
    const result = [];
    data.x.map((e) => {
      if (e.recipe.toLowerCase() === x) {
        result.push(e);
      }
    });
    navigate("/data", { state: { results: result } });
  }


  const handleAccountClick = () => {
    navigate("/login"); 
  };
  useEffect(() => {
    const navTop = navRef.current.offsetTop;
    const handleScroll = () => {
      if (window.scrollY >= navTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <img src="/logo.jpg" alt="Logo" className="logo" />
        </div>
        <div className="topbar-center">
  <select className="location-dropdown">
    <option value="newyork">New York</option>
    <option value="london">London</option>
    <option value="delhi">Delhi</option>
  </select>
  <input
    type="text"
    placeholder="Search for products"
    className="search-bar"
    onChange={(e)=>setX(e.target.value.toLowerCase())}
  />
 <button className="search-button" onClick={show}>Search</button>


</div>

        <div className="topbar-right">
        <img 
            src={isLoggedIn ? "/account-loggedin.png" : "/account-logo.jpg"}
            alt="Account" 
            className="icon"  
            onClick={handleAccountClick} 
        />

          <img src="/cart.png" alt="Cart" className="icon" onClick={handleCartClick} />
        </div>
      </div>

      <div ref={navRef} className={`navibar ${isFixed ? "fixed" : ""}`}>
        <nav>
          <ul>
            <li><NavLink to="/" end>HOME</NavLink></li>
            <li><NavLink to="/wt">All products</NavLink></li>
            <li><NavLink to="/hr">Offer</NavLink></li>
            <li><NavLink to="/faq">FAQs</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navibar;
