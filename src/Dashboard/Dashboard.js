import React from "react";
import { CustomerIcon, OrderIcon, UserIcon } from "../Svgs/Svg";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div>
        <article className="d-flex justify-content-center">
          <h1>Numl Complain System</h1>
        </article>
        <article className="maincard">
          <article className="box">
            <UserIcon />
            <h2>Total User</h2>
          </article>
          <article className="box">
            <span className="iconsidebar">
              <CustomerIcon />
            </span>
            <h2>Total Complain</h2>
          </article>
          <article className="box">
            <OrderIcon />
            <h2>Resvoled Complain</h2>
          </article>
        </article>
      </div>
      <form className="background layout">
        <article>
          <label> Subject</label>
        </article>
        <article>
          <input type="text" />
        </article>
        <article>
          <label> Suggestion/Complaint </label>
        </article>
        <article>
          <textarea rows="5"></textarea>
        </article>
        <artice>
          <label>Category</label>
        </artice>
        <article>
          <select>
            <option value="">Please Select Category</option>
            <option value="1">Fee</option>
            <option value="3">Exam</option>
            <option value="4">Faculty</option>
          </select>
        </article>
        <div className="sub-btn">
          <button className="postbtn">Submit Complaint</button>
        </div>
      </form>
    </>
  );
}

export default Dashboard;
