import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const postlogin = () => {
    axios({
      method: "POST",
      data: {
        username: username,
        password: password,
      },
      url: "http://localhost:8000/login",
    }).then((res) => alert("This account is " + res.data));
  };
  return (
    <>
      <div className="container d-flex justify-content-center my-5 py-3 fontColor w-50">
        <div className=" p-3 w-50">
          <p className="fw-bold fs-4 text-center">LOG IN</p>
          <label className="mt-3 fw-light" htmlFor="">
            E-mail
          </label>
          <input
            type="email"
            className="form-control mt-2"
            name="email"
            onChange={(ev) => setUsername(ev.target.value)}
            placeholder=""
          />
          <label className="mt-3 fw-light" htmlFor="">
            Password
          </label>
          <input
            type="password"
            className="form-control mt-2"
            name="password"
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder=""
          />
          <div className="text-center">
            <button onClick={postlogin} className="btn btn-dark text-white mt-3 ">
              Accept
            </button>
            <div className="mt-2">
              <p>
                In case you want to test an already created account, you can access with these
                credentials. <br /> E-mail: test@test.com <br />
                Password: test
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
