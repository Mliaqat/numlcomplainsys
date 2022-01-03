import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CustomerIcon,
  DeleteIcon,
  EditIcon,
  OrderIcon,
  UserIcon,
} from "../Svgs/Svg";
import "./Dashboard.css";

function Dashboard() {
  const [subject, setsubject] = useState();
  const [compalin, setcomplain] = useState();
  const [allcomplain, setallcomplain] = useState([]);
  const [category, setcategory] = useState();

  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const Popup = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

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
        alert("Complain Submited");
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

  const deletecomplain = async (id) => {
    await axios.delete(`${url}/${id}`).catch((err) => {
      console.log(err);
    });
    getcomplain();
  };

  const hanldeClick = async (e) => {
    setsubject(e.subject);
    setcomplain(e.compalin);
    setcategory(e.category);

    await axios
      .put(`${url}/${e._id}`, data)
      .then(() => {
        alert("data is updated");
        window.location.reload();
      })
      .catch((err) => {
        console.log(`error >> ${err}`);
      });
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
          <input
            type="text"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
          />
        </article>
        <article>
          <label> Suggestion/Complaint </label>
        </article>
        <article>
          <textarea
            rows="5"
            value={compalin}
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

      <article className="d-flex justify-content-center">
        <h2>Complain Details</h2>
      </article>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Complain</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allcomplain.map((data, index) => {
            const { _id, subject, compalin, category } = data;
            return (
              <tr key={index}>
                <td data-label="Order ID" key={index}>
                  {index}
                </td>
                <td>{subject}</td>
                <td>{compalin}</td>
                <td>{category}</td>
                <td>
                  <article className="action-buttons-wrapper">
                    <button
                      className="action-button1"
                      onClick={() => Popup(data)}
                    >
                      Edit
                    </button>
                    <button
                      className="action-button2"
                      onClick={() => deletecomplain(_id)}
                    >
                      Delete
                    </button>
                  </article>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {show && <Modal details={selectedData} handleClose={hideModal} />}
    </>
  );
}

export default Dashboard;

const Modal = ({ handleClose, details }) => {
  const url = "http://localhost:5000/complain";

  const { _id, subject, compalin, category } = details;

  const [Data, setData] = useState({
    subject: subject,
    compalin: compalin,
    category: category,
  });

  const editProductValue = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(Data);

  const hanldeClick = async () => {
    await axios
      .put(`${url}/${_id}`, Data)
      .then(() => {
        alert("data is updated");
      })
      .catch((err) => {
        console.log(`error >> ${err}`);
      });
  };

  return (
    <div className="modal display-block">
      <section className="modal-main">
        <div className="App">
          <table class="table">
            <thead className="poptable">
              <tr>
                <th>Subject</th>
                <th>Complain</th>
                <th>Category</th>
              </tr>
            </thead>
          </table>
          <article className="inputwrapper">
            <article>
              <input
                type="text"
                className="popupinput"
                name="subject"
                value={Data.subject}
                onChange={(e) => editProductValue(e)}
              />
            </article>

            <article>
              <input
                type="text"
                className="popupinput"
                name="compalin"
                value={Data.compalin}
                onChange={(e) => editProductValue(e)}
              />
            </article>
            <article>
              <select
                className="popupinput1"
                name="category"
                value={Data.category}
                onChange={(e) => editProductValue(e)}
              >
                <option value="">Please Select Category</option>
                <option value="1">Fee</option>
                <option value="3">Exam</option>
                <option value="4">Faculty</option>
              </select>
            </article>
          </article>
        </div>
        <button
          onClick={() => {
            hanldeClick();
            handleClose();
          }}
          className="updatebtn"
        >
          Update
        </button>
      </section>
    </div>
  );
};
