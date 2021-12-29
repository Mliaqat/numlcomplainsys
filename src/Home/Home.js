import React from "react";
import "./Home.css";
import img from "../Asset/img.png";

function Home() {
  return (
    <div className="main">
      <article className="content">
        <h1>We are Here for Resolve Your Issue!</h1>
        <button href="#" class="buttonClass">
          Learn More
        </button>
      </article>
      <article>
        <img src={img} className="img"></img>
      </article>
    </div>
  );
}

export default Home;
