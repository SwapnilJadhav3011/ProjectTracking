import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Loginservice from "../../services/Loginservice";
import FooterComponent from "../FooterComponent";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "bootstrap/dist/css/bootstrap.css";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Logincomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      role: "",
      captcha: null,
    };
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.checkEmployee = this.authenticateEmployee.bind(this);
  }

  onChange(value) {
    this.setState({ captcha: 1234 });
    console.log("Captcha value:", value);
  }

  /* This method after clicking submit button sends the data of email and password in json format
        so in response from the server if the sent value exists in the database then a response status 200 
        is recieved and in the backend we have coded that the post mapping sends a Employee Object in a json form
        as a response*/
  authenticateEmployee = (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(this.state);

    if (email == "") {
      document.getElementById("ename").innerHTML = "Please fill the email";
      document.getElementById("email").style.borderColor = "red";
      return false;
    } else {
      document.getElementById("ename").innerHTML = " ";
      document.getElementById("email").style.borderColor = "green";
    }

    if (password == "") {
      document.getElementById("pass").innerHTML = "Please fill the password";
      document.getElementById("password").style.borderColor = "red";
      return false;
    } else {
      document.getElementById("ename").innerHTML = " ";
      document.getElementById("email").style.borderColor = "green";
    }

    if (this.state.captcha == null) {
      document.getElementById("cap").innerHTML = "Please click for captcha";
      return false;
    }

    let employee = { email: this.state.email, password: this.state.password };
    console.log("employee => " + JSON.stringify(employee));
    Loginservice.authenticateUser(employee).then((response) => {
      //console.log("response recieved: ",JSON.stringify(res));
      console.log(response.data);
      sessionStorage.setItem("user", JSON.stringify(response.data));

      if (response.data.role === "PROJECT MANAGER") {
        sessionStorage.setItem("role", "PROJECT MANAGER");
        this.props.history.push("/employeelist");
      } else if (response.data.role === "DEVELOPER") {
        sessionStorage.setItem("role", "DEVELOPER");
        this.props.history.push(`/developerlogin/${response.data.empid}`);
      } else if (response.data.role === "TESTER") {
        sessionStorage.setItem("role", "TESTER");
        this.props.history.push(`/testerlogin/${response.data.empid}`);
      } else alert("Invalid Username/Password");
    });
  };

  /* captures the event and sets the email value which was empty 
    at instantiation i.e extraction of value from emai input field */

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <header>
          <div className="fixed-top bg-light">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <Navbar>
                  <Navbar.Brand href="/">
                    <img
                      alt=""
                      src="/images/2 (1).png"
                      width="35"
                      height="35"
                      className="d-inline-block align-top"
                    />{" "}
                    Project Tracking
                  </Navbar.Brand>
                </Navbar>
                <div
                  className="collapse navbar-collapse bg-dark"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#home"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#services"
                      >
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#aboutus"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#faq"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="progress-container">
              <div className="progress-bar" id="myBar"></div>
            </div>
          </div>
        </header>

        <div className="container-fluid" id="home">
          <div className="row">
            <div className="col-md-6 offset-1" style={{ marginTop: "50px" }}>
              <h3 style={{ marginTop: "50px" }}>Welcome to Project Tracking</h3>
              <p className="font-weight-light">Please login and get started!</p>
              <img alt="" src="/images/login.jpg" width="550" />
            </div>
            <div
              className="card col-md-4 shadow p-3 mb-5 bg-white rounded"
              style={{ marginTop: "80px" }}
            >
              <Card.Body>
                <Card.Title className="text-center">
                  <img
                    alt=""
                    src="/images/worker.png"
                    width="130"
                    height="120"
                  />
                </Card.Title>
                <form>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      id="email"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                    <span
                      id="ename"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      id="password"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                    <span id="pass" className="text-danger font-weight-bold"></span>
                  </div>
                  <br />
                  <div className="d-flex justify-content-center" id="captcha1">
                    <ReCAPTCHA
                      sitekey="6LcoEj4cAAAAAGpgJho5jDigmc_GFZXTRJ-Jaa05"
                      onChange={this.onChange}
                      id="captcha"
                    />
                    <span id="cap" className="text-danger font-weight-bold "></span>
                  </div>
                  <div className="text-center" style={{ marginTop: "30px" }}>
                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-primary"
                      onClick={this.authenticateEmployee}
                    >
                      Submit
                    </button>
                  </div>
                  <center>
                    <Link to={"/forget"}>Forget Password</Link>
                  </center>
                  <br />
                  {/* <div className="forget-password">
                    <div className="check-box">
                      <input type="checkbox" id="checkbox" />
                      <label for="checkbox">Remember me</label>
                    </div>
                    <a href="#">Forget password?</a>
                  </div> */}
                  <div className="account-exist">
                    Create a New account?
                    <a href="/rationproject/regipage.html" target="_blank">
                      <Link to={"/register"}>Sign up</Link>
                    </a>
                  </div>
                </form>
              </Card.Body>
            </div>
          </div>
        </div>
        <hr />
        <section className="services" id="services">
          <br />
          <br />
          <h1 className="heading">
            <span>S</span>
            <span>E</span>
            <span>R</span>
            <span>V</span>
            <span>I</span>
            <span>C</span>
            <span>E</span>
            <span>S</span>
          </h1>

          <div className="box-container" style={{ fontSize: 60 }}>
            <div className="box">
              <i className="fas fa-bug"></i>
              <h3>Manage tasks better</h3>
              <p>
                Record tasks quickly with details like severity and due date,
                assign them to users, and add followers — all from one screen.
                Get a consolidated view of all your tasks, and track your team's
                progress with reports and milestones.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-user-shield"></i>
              <h3>Administer users effectively</h3>
              <p>
                Give every development team their very own space to create
                modules, assign user roles and set privileges. With Zoho
                ProjectTracker, administrators are in total control and can get
                fine level visibility of a project.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-tasks"></i>
              <h3>View Progress of Tasks</h3>
              <p>
                Gain insights about the progress of the tasks filed in a project
                with a visually appealing task status report. You can also view
                the number of open and closed tasks and their details in a crisp
                way.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-globe-asia"></i>
              <h3>Centralized User Management</h3>
              <p>
                Administrators can customize the portal, provide secure access
                and control various activities a group of users can perform on a
                project. Each role has different access privileges that includes
                actions like submit, move or assign a task so as to fit your
                company's working style.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-shipping-fast"></i>
              <h3>Fix tasks faster</h3>
              <p>
                Make the process of how your team records and tracks tasks
                easier. Backlog turns reported issues into clear, easy-to-follow
                outlines so you can dive into details faster.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-briefcase"></i>
              <h3>Get more done</h3>
              <p>
                View, prioritize, and discuss all your tasks in one place. Get
                notified when you're assigned a new task and let everyone know
                when you're done.
              </p>
            </div>
          </div>
        </section>
        <hr />
        <div className="FAQ" id="faq">
          <br />
          <br />
          <br />
          <br />
          <h1 className="text-center">? Frequently Asked Questions ?</h1>

          <div className="row p-1 bg-gradient">
            <div className="col-md-4">
              <img alt="" src="/images/faq.jpg" width="80%" height="80%" />
            </div>
            <div className="col-md-8">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Why use Project Management Tracking?
                  </Accordion.Header>
                  <Accordion.Body>
                    There are multiple benefits and many reasons to engage with
                    project tracking, from increased chances of project success
                    to creating a united team. Keeping up to date on the
                    progress of the project and awareness of project status, it
                    is easy to spot any potential issues that could prevent
                    project success. Complete transparency is essential for
                    accurate decision-making. Project tracking keeps all team
                    members and stakeholders in touch with deadlines and goals,
                    enabling the project lead to manage with confidence.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What is Project Tracking?</Accordion.Header>
                  <Accordion.Body>
                    Project Tracking is a method of project management for
                    following the progress (or lack thereof) of activities
                    involved in projects. Potential issues can be spotted and
                    solved by team members and leaders. Tracking projects from
                    the beginning, dealing with problems quickly, and
                    proactively making decisions is what successful project
                    managers do. Managing all tasks and activities involved,
                    handling multiple files involved, and most importantly, the
                    people who make up the team make this incredibly
                    challenging.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How can Project Central help you to track projects
                    effectively?
                  </Accordion.Header>
                  <Accordion.Body>
                    Project Central is designed to make project management as
                    simple as possible. We know projects are complicated things,
                    so we made tools to make it as easy as possible. In
                    addition, project management still has not offered a great
                    solution for small teams. You are wearing many hats and
                    everyone is firing in on tasks, projects and details. You
                    help with everything, as well as having to do the day job.
                    Research has shown that smaller teams, even within larger
                    organizations, make decisions that more quickly affect their
                    customers…but it seems like project management platforms
                    have been slow to embrace that shift.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Who should be involved in Project Tracking?
                  </Accordion.Header>
                  <Accordion.Body>
                    The foundation for effective project management tracking and
                    status reporting is laid during project planning. That is
                    where the project manager and executives define clear
                    deliverables and checkpoints for measuring progress. Team
                    leaders, for the benefit of the whole team, should direct
                    project tracking. Poor decision-making from senior
                    executives is an issue created from a lack of transparency
                    and up-to-date information. With effective project tracking
                    this problem is eliminated, allowing for informed and
                    accurate decision-making.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <br />
        <br />
        <footer className="footer-distributed bg-dark text-white" id="contact">
          <br />
          <br />
          <div className="footer-left">
            <span className="logofooter">
              <img src="/images/LOGO1.png" alt="" width="150px" height="50px" />
            </span>

            <p className="footer-links">
              <a href="#" className="link-1">
                Home
              </a>

              <a href="#">Services</a>

              <a href="#">Pricing</a>

              <a href="#">About</a>

              <a href="#">Faq</a>

              <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">BTS © 2021</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>444 S. near CST</span> Gov. of Maharashtra, Mumbai
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>
                Helpline: +91 11 23978046 (Toll Free)
                <br />
                Technical Helpline: 0120 4473222
              </p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">support@pts.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
          <span>
                <h4>About PTS</h4>
              </span> 
            <p className="footer-company-about">
               
              This site is designed, hosted and <br />
              maintained by National Informatics Centre,
              <br />
              Ministry of Electronics & Information Technology, Government of
              India.
            </p>

            <div className="footer-icons">
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/?lang=en" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/?hl=en" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </footer>
        <FooterComponent />
      </div>
    );
  }
}

export default Logincomponent;

/**/
