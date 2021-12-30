import React from "react";
import "./About.css";
import img from "../Asset/about.png";

function About() {
  return (
    <div>
      <section className="text-center about">
        <h1>About US</h1>
        <div className="main">
          <article>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled
            </p>
          </article>
          <article>
            <img src={img}></img>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;
