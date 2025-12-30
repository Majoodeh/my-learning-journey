import React, { useState } from "react";

function App() {
  function getTime() {
    return new Date().toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  const [time, setTime] = useState(getTime());
  console.log(time);

  return (
    <div className="container">
      <h1> {time} </h1>
      <button
        onClick={() => {
          setTime(getTime());
        }}
      >
        Get Time
      </button>
    </div>
  );
}

export default App;
