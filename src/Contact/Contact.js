import React from "react";
import "./Contact.css";
import img from "../Asset/contact.png";

function Contact() {
  return (
    <div>
      <article className="mx-auto">
        <h1>Contact Us</h1>
      </article>
      <article className="main">
        <form className="form">
          <div>
            <div>
              <input
                type="text"
                className="inputfield"
                placeholder="Name"
                name="name"
                value=""
              />
            </div>
          </div>

          <div>
            <div>
              <input
                type="email"
                className="inputfield"
                placeholder="EMAIL"
                name="email"
                value=""
              />
            </div>
          </div>

          <textarea
            rows="8"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <br></br>

          <div className="sub-btn">
            <button className="postbtn">Submit Complaint</button>
          </div>
        </form>

        <article>
          <img src={img}></img>
        </article>
      </article>
    </div>
  );
}

export default Contact;
