import React from "react";
import Input from "./Input";

const userIsRegistered = false;
function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {userIsRegistered ? (
        <button type="submit">Login</button>
      ) : (
        <>
          <Input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </>
      )}
    </form>
  );
}

export default Form;

{
  /* <Input type="password" placeholder="Confirm Password" />
      <button type="submit">{userIsRegistered? "Login" : "Register"}</button> */
}
