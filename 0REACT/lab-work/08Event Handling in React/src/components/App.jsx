import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Heading");
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [btnColor, setBtnColor] = useState();

  function handleClick() {
    const submitValue = !isSubmitted;
    setIsSubmitted(submitValue);

    submitValue
      ? setHeadingText("Submitted")
      : setHeadingText(" Not Submitted");
  }

  function mouseOut() {
    setBtnColor("white");
  }
  function mouseIn() {
    setBtnColor("black");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />

      <button
        onClick={handleClick}
        onMouseOut={mouseOut}
        onMouseOver={mouseIn}
        style={{ backgroundColor: btnColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

//! A second solution

/* import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Heading");
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [btnColor, setBtnColor] = useState();
  const [isItOver, setIsItOver] = useState(false);
  function handleClick() {
    const submitValue = !isSubmitted;
    setIsSubmitted(submitValue);

    submitValue
      ? setHeadingText("Submitted")
      : setHeadingText(" Not Submitted");
  }

  function mouseOut() {
    // setBtnColor("white");
    setIsItOver(false);
  }
  function mouseIn() {
    // setBtnColor("black");
    setIsItOver(true);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />

      <button
        onClick={handleClick}
        onMouseOut={mouseOut}
        onMouseOver={mouseIn}
        style={{ backgroundColor: isItOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App; */
