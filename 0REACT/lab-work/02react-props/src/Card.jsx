import React from "react";

function Card(props) {
  const { name, src, alt, number, email } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img src={src} alt={alt} />
      <p>{number}</p>
      <p>{email}</p>
    </div>
  );
}

export default Card;
