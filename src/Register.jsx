import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [acctype, setAcctype] = useState("");

  const postregister = () => {
    axios({
      method: "POST",
      data: {
        username: username,
        firstname: firstname,
        lastname: lastname,
        password: password,
        acctype: acctype,
      },
      url: "http://localhost:8000/register",
    }).then((res) => alert("Your account " + res.data));
  };

  return (
    <>
      <div className="container my-5 d-flex justify-content-center border w-50 rounded fontColor">
        <div className="p-3 w-50 ">
          <p className="fw-bold fs-3 text-center">Health Care Registration</p>
          <label className="mt-3 fw-light" htmlFor="">
            First Name
          </label>
          <input
            className="form-control mt-2"
            placeholder=""
            onChange={(ev) => setFirstname(ev.target.value)}
          />
          <label className="mt-3 fw-light" htmlFor="">
            Last Name
          </label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder=""
            onChange={(ev) => setLastname(ev.target.value)}
          />
          <label className="mt-3 fw-light" htmlFor="">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="form-control mt-2"
            placeholder=""
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <label className="mt-3 fw-light" htmlFor="">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control mt-2"
            placeholder=""
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <div className="mt-3">
            <select onChange={(ev) => setAcctype(ev.target.value)} name="acctypes">
              <option value="" disabled selected>
                Select...
              </option>
              <option value="Patient">Patient</option>
              <option value="Caregiver">Caregiver</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="text-center ">
            <button className="btn btn-dark text-white mt-3 me-3 ms-3" onClick={postregister}>
              Register
            </button>
            <Link to="/login" className="btn btn-dark text-white rounded  mt-3 me-3 ms-3 ">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
