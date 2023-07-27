import React, { Component } from "react";
import { Navbar, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import FetchProject from "../services/FetchProject";

export default function HeaderComponent() {
  const endSession = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("role");
    window.location = "/";
  };

  return (
    <div>
      {/* <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <div className="navbar-brand">
                            <img
                                alt=""
                                src="/images/2 (1).png"
                                width="35"
                                height="35"
                                className="d-inline-block align-top"
                            />{' '}Bug Tracking System</div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ">
                                <Link to={"/employeelist"} className="nav-link">Employees</Link>
                            </ul>
                            <ul className="navbar-nav">
                                <NavDropdown title="Projects" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/projects">Projects List</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/employeeproject">Alloted Projects</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/assigndeveloper">Assign a Developer</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/assigntester">Assign a Tester</NavDropdown.Item>
                                </NavDropdown>
                            </ul>
                            <ul className="navbar-nav">
                            <NavDropdown title="Bugs" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/bugslist">Bugs List</NavDropdown.Item>
                                </NavDropdown>
                            </ul>
                        </div>
                        
                        <div className="navbar-right">
                            <Link to={"/"} className="nav-link btn btn-outline-danger">Logout</Link>
                        </div>
                    </nav>
                    <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
                </header>*/}
      <header>
        <div className="fixed-top bg-light">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Navbar>
                <Navbar.Brand>
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
                    <Link to={"/employeelist"} className="nav-link">
                      Employees
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/projects">
                        Projects List
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/employeeproject">
                        Alloted Projects
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/assigndeveloper">
                        Assign a Developer
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/assigntester">
                        Assign a Tester
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <li className="nav-item">
                    <NavDropdown title="Bugs" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/bugslist">
                        Tasks List
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#faq">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-outline-danger"
                      onClick={endSession}
                    >
                      Logout
                    </button>
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
    </div>
  );
}
