import React from "react";
import bg from "../images/bg.png";

function Login() {
  return (
    <div className="regbackground">
      <div className="container regbg">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <h2 className="mb-3 mt-1">Login</h2>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email address"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="regpic">
        <img src={bg} alt="pic" />
      </div>
    </div>
  );
}

export default Login;
