import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

function Data() {
  const location = useLocation();
  const detail = location.state?.results || [];
  const navigate = useNavigate();
  return (
    <>
    <Header />
    <div className="recipe1">
      {detail.map((e) => (
        <div className="recipe2" key={e.id}>
          <img className="m1" src={e.photo} alt={e.recipe} />
          <p>{e.recipe}</p>
          <p>Rs {e.price}</p>
          <button className="b2" onClick={() => navigate("/detail", { state: { product: e } })}>View Details</button>
        </div>
      ))}
    </div>
    
    </>
  );
}

export default Data;
