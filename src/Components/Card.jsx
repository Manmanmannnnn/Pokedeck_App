import React, { useEffect } from "react";

function Card({ name, sprite }) {
  return (
    <div style={{ textAlign: "center", backgroundColor: "green" }}>
      <p>{name}</p>
      <img src={sprite} alt='' />
    </div>
  );
}

export default Card;
