import React from "react";
import bg from '../images/bg.png';

function Register() {
  return (
      <div className="regbackground">
    <div className="container regbg">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <h2 className="mb-3 mt-1">Registration</h2>
          <form>
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="string"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter your name"
              />
            </div>
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
              <label for="exampleInputNumber" className="form-label">
                Phone
              </label>
              <input
                type="phone number"
                className="form-control"
                id="exampleInputNumber"
                placeholder="Enter phone number"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputWork" className="form-label">
                Work
              </label>
              <input
                type="string"
                className="form-control"
                id="exampleInputWork"
                placeholder="Enter your name"
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
            <div className="mb-3">
              <label for="exampleInputPasswor2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                placeholder="confirm password"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your information with anyone else.
              </div>
            </div>
            <button type="submit" className="btn btn-secondary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="regpic">
        <img src={bg} alt="pic"/>
    </div>
    </div>
  );
}

export default Register;
