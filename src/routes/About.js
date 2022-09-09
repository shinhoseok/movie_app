import React from "react";
import { useLocation } from "react-router-dom";
import "./About.css";

function About() {
  const location = useLocation();
  const signUp = location.state.signUp;
  console.log(signUp); //false
  return (
    <div className="about__container">
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span>− George Orwell, 1984</span>
    </div>
  );
}

export default About;