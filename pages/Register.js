import "./RegisterPage.css";
import { useState } from "react";
import logo from "./logo1.png";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const intialStateErrors = {
    email: { required: false },
    password: { required: false },
    name: { required: false },
    lastname: { required: false },
    cpassword: { required: false },
  };

  const [errors, setErrors] = useState(intialStateErrors);

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = intialStateErrors;

    if (inputs.email === "") {
      errors.email.required = true;
    }
    if (inputs.password === "") {
      errors.password.required = true;
    }
    if (inputs.cpassword === "") {
      errors.cpassword.required = true;
    }
    if (inputs.name === "") {
      errors.name.required = true;
    }
    if (inputs.lastname === "") {
      errors.lastname.required = true;
    }

    setErrors(errors);
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    cpassword: ""
  });

  const handleInputs = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <section className="register-block">
      <div className="container">
        <div className="row ">
          <div className="col register-sec">
            <div className="logo"></div>
            <div class="text-center">
              {" "}
              <img
                style={{ width: 100, height: 100 }}
                src={logo}
                alt="BigCo Inc. logo"
              />
            </div>

            <form onSubmit={handleSubmit} className="register-form" action="">
              <div className="form-group">
                <div>
                  <p>
                    Join our community of designers and developers andmanage
                    your purchases
                  </p>
                  <p>favorite themes and snippets, comments, and more!</p>
                  <div class="row">
                    <div class="col">
                      <div className="d-flex justify-content-center text-center">
                        <div class=" p-6 social-account d-grid  ">
                          <Link
                            className="btn btn-primary"
                            to="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"
                          >
                            <i class="bi bi-twitter"></i> Log in with Twitter{" "}
                          </Link>
                          <Link to="https://www.facebook.com/">
                            <button type="button" class="btn btn-success">
                              <i class="bi bi-facebook"></i> Login With Facebook{" "}
                            </button>
                          </Link>
                          <Link to="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=openid%20email%20profile&include_granted_scopes=true&response_type=code&state=4ed1caa1-e06e-4206-8c25-53a5d6aac896&redirect_uri=https%3A%2F%2Fstartbootstrap.com%2Fauth%2Fsocial%3Fsocial%3Dgoogle&client_id=1001669242328-b42ehvm949ska9qcs1gqsh8usrruepa8.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow">
                            {" "}
                            <button type="button" class="btn btn-danger">
                              <i class="bi bi-google"></i> Log in With Google{" "}
                            </button>
                          </Link>
                          <Link to="https://github.com/">
                            <button type="button" class="btn btn-dark">
                              <i class="bi bi-github"></i> Log in with Github{" "}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <p>...or enter your information below.</p>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">First Name</label>
                  <input
                    type="name"
                    class="form-control"
                    onChange={handleInputs}
                    id="inputEmail4"
                    placeholder=""
                    name="name"
                  />
                  {errors.name.required ? (
                    <span className="text-danger">Name is required</span>
                  ) : null}
                </div>
                <div class="form-group col-md-6">
                  <label for="inputName">Last Name</label>
                  <input
                    type="name"
                    class="form-control"
                    onChange={handleInputs}
                    id="inputPassword4"
                    placeholder=""
                    name="lastname"
                  />
                  {errors.lastname.required ? (
                    <span className="text-danger">Last Name is required</span>
                  ) : null}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email Address</label>

                <input
                  type="text"
                  className="form-control"
                  onChange={handleInputs}
                  name="email"
                  id=""
                />
                {errors.email.required ? (
                  <span className="text-danger">Email is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  className="form-control"
                  onChange={handleInputs}
                  type="password"
                  name="password"
                  id=""
                />
                {errors.password.required ? (
                  <span className="text-danger">Password is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input
                  className="form-control"
                  onChange={handleInputs}
                  type="password"
                  name="cpassword"
                  id=""
                />
                {errors.cpassword.required ? (
                  <span className="text-danger">
                    Confirm Password is required.
                  </span>
                ) : null}
              </div>

              <div>
                <input type="checkbox"></input>I accept the terms & conditions
              </div>
              <div className="form-group">
                <span className="text-danger">
                  <span>Forgot Password</span>
                </span>

                <input
                  type="submit"
                  class="btn btn-login float-right"
                  value="Register"
                />
                <br />
              </div>
              <div className="clearfix"></div>
              <div className="form-group">
                This site is protected by reCAPTCHA and the Google
                <Link to="https://policies.google.com/privacy">
                  <span className="text-danger">Private policy</span>{" "}
                </Link>
                and{" "}
                <Link to="https://policies.google.com/terms">
                  {" "}
                  <span className="text-danger">Terms of Service</span>{" "}
                </Link>
              </div>
            </form>
            <hr />
            <div>
              <p>
                Have an account?<span className="text-danger"></span>{" "}
                <Link to="http://localhost:3000/">Sign in!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
      </div>
      <span>Copyright © Start Bootstrap LLC 2021</span>
      <br />
      <Link to="https://policies.google.com/privacy">
        <span>Privacy Policy·</span>
      </Link>
      <Link to="http://localhost:3000/">
        <span>Terms & Conditions</span>
      </Link>
    </section>
  );
}
