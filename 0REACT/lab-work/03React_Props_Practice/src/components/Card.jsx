import React from "react";

function Card(props) {
  const { name, src, alt, phoneNumber, email } = props;
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{name}</h2>
          <img className="circle-img" src={src} />
        </div>
        <div className="bottom">
          <p className="info">{phoneNumber}</p>
          <p className="info">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
