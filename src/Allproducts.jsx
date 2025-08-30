import React from "react";
import data from './data.json';
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="recipe1">
        {data.x.map((e) => (
          <div className="recipe2" key={e.id}>
            <img className="m1" src={e.photo} alt={e.recipe} />
            <p>{e.id}</p>
            <p>{e.recipe}</p>
            <p><strong>Price:</strong> RS {e.price}</p>
            <button className="b2" onClick={() => navigate("/detail", { state: { product: e } })}>
              View Details
            </button>
          </div>
        ))}
      </div>
      
    </>
  );
}

export default AllProducts;
