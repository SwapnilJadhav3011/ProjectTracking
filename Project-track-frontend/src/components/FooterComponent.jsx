import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class FooterComponent extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <div>
        <div
          className="bg-dark fixed-bottom text-light mb-0 p-2 text-center"
          id="cookies"
        >
          <a href="/cookie-policy" className="me-1" target="_blank">
            Privacy Policy 
          </a>
          and
          <a href="/privacy-policy" className="ms-1" target="_blank">
             Terms of Service
          </a>
          . Copyright © 2021 BTS. All Rights Reserved.
        </div>
      </div>
    );
  }
}

export default FooterComponent;
