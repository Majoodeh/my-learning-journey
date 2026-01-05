import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notesList, setNotesList] = useState([]);

  function handleChange(event) {
    setInputValue(event.target.value);

    console.log(inputValue);
  }

  function handleClick() {
    if (inputValue.trim()) {
      setNotesList((prevData) => {
        return [...prevData, inputValue];
      });
      console.log(notesList);
      setInputValue("");
    }
  }

  function createLiEl(data) {
    return data.map((item) => {
      return <li>{item}</li>;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputValue} />
        <button onClick={handleClick} disabled={!inputValue.trim()}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{createLiEl(notesList)}</ul>
      </div>
    </div>
  );
}

export default App;
