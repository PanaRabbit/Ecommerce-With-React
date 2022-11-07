import React, { useState } from "react";
import "../styles/Sizes.module.css";

const Sizes = ({ sizesInfo }) => {
  const sizesArray = sizesInfo.values;

  const [sizes, setSizes] = useState(sizesArray);

  return (
    <div className="container">
      <h4>{sizesInfo.name}: </h4>
      <div className="sizes">
        {sizes.map((size, index) => (
          <div className="squareSize" key={index}>
            <span>{size}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
