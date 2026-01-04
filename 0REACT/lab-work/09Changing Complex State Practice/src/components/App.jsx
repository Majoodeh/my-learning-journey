import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContact((prevData) => {
      console.log(prevData);
      if (name === "fName") {
        return { ...prevData, fName: value };
        console.log();
      } else if (name === "lName") {
        return { ...prevData, lName: value };
      } else if (name === "email") {
        return { ...prevData, email: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p> Your Email is: {contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
