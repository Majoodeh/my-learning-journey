import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

ReactDOM.render(
  <>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      number="+123 456 789"
      email="b@beyonce.com"
      alt="avatar_img"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />

    <Card
      name="Jack Bauer"
      number="+987 654 321"
      email="jack@nowhere.com"
      alt="avatar_img"
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    />
  </>,

  document.getElementById("root")
);

//  const { name, src, alt, number, email } = props;
