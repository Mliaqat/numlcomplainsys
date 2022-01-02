import React, { useState, useEffect } from "react";
import axios from "axios";
import { CustomerIcon, OrderIcon, UserIcon } from "../Svgs/Svg";
import "./Dashboard.css";

function Dashboard() {
  const [subject, setsubject] = useState();
  const [compalin, setcomplain] = useState();
  const [allcompalin, setallcomplain] = useState([]);
  const [category, setcategory] = useState();

  const url = "http://localhost:5000/complain";

  const data = {
    subject: subject,
    compalin: compalin,
    category: category,
  };

  const addcomplain = (e) => {
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getcomplain();
  }, []);

  const getcomplain = async () => {
    await axios.get(url).then((res) => {
      console.log(res.data);
      setallcomplain(res.data);
    });
  };

  const deltecomplain = async (id) => {
    await axios.delete(`${url}/${id}`).catch((err) => {
      console.log(err);
    });
    getcomplain();
  };

  return (
    <>
      <div>
        <article className="d-flex justify-content-center">
          <h1>Numl Complain System</h1>
        </article>
        <article className="maincard">
          <article className="box">
            <UserIcon />
            <h2>Total User 255</h2>
          </article>
          <article className="box">
            <span className="iconsidebar">
              <CustomerIcon />
            </span>
            <h2>Total Complain 100+</h2>
          </article>
          <article className="box">
            <OrderIcon />
            <h2>Resvoled Complain 50</h2>
          </article>
        </article>
      </div>

      <form className="background layout">
        <article>
          <label> Subject</label>
        </article>
        <article>
          <input type="text" onChange={(e) => setsubject(e.target.value)} />
        </article>
        <article>
          <label> Suggestion/Complaint </label>
        </article>
        <article>
          <textarea
            rows="5"
            onChange={(e) => setcomplain(e.target.value)}
          ></textarea>
        </article>
        <artice>
          <label>Category</label>
        </artice>
        <article>
          <select onChange={(e) => setcategory(e.target.value)}>
            <option value="">Please Select Category</option>
            <option value="1">Fee</option>
            <option value="3">Exam</option>
            <option value="4">Faculty</option>
          </select>
        </article>
        <div className="sub-btn">
          <button className="postbtn" onClick={() => addcomplain()}>
            Submit Complaint
          </button>
        </div>
      </form>
    </>
  );
}

export default Dashboard;
