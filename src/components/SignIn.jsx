import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
      <section id="signin">
        <h3>See personalized recommendations</h3>
        <button>Sign In</button>
        <h4>
          New Customer{" "}
          <a href="https://amazon.in" target="_blank">
            Start Here
          </a>
        </h4>
      </section>
      <button id="top">
        <a href="#">Back To Top</a>
      </button>
    </>
  );
};

export default SignIn;
