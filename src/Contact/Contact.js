import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <article className="row">
        <h1>Contact Us</h1>
      </article>
      <article>
        <form class="form" role="form">
          <div class="form-group">
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value=""
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-6">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value=""
                required
              />
            </div>
          </div>

          <textarea
            class="form-control"
            class="col-sm-6"
            rows="8"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button
            class="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div class="alt-send-button">
              <span class="send-text">SEND</span>
            </div>
          </button>
        </form>
      </article>
    </div>
  );
}

export default Contact;
