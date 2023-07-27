import React, { Component } from "react";
import "../serv.css";

class servicesComponent extends Component {
  render() {
    return (
      <div>
        <section className="services" id="services">
          <h1 className="heading">
            <span>s</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
          </h1>

          <div className="box-container">
            <div className="box">
              <i className="fas fa-hotel"></i>
              <h3>Affordable Hotel</h3>
              <p>
                Hotels with affordable and cheap rates with all the facilities
                for tours with Day and Night stay.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-utensils"></i>
              <h3>Food and Drink</h3>
              <p>
                Breakfast, Lunch,Supper and Dinner are provided at proper
                interval ,serving with best quality food and also serving the
                speciality of the place of interval.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-bullhorn"></i>
              <h3>Safety Guide</h3>
              <p>
                An initiative by Bluebus to keep passengers safe by ensuring
                that bus operators and passengers follow strict regulations and
                guidelines that have been set by the government.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-globe-asia"></i>
              <h3>Around the India</h3>
              <p>
                Services provided countrywide with a promise to give the best
                possible service to the customers.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-bus"></i>
              <h3>Fastest travel</h3>
              <p>
                Fixed time of Arrival and Departure from place to place making
                the travelling as per the schedule by choosing the best and
                comfortable route of travel.
              </p>
            </div>

            <div className="box">
              <i className="fas fa-hiking"></i>
              <h3>Traveling Adventure</h3>
              <p>
                Short distance tours full of adventures designed for Friends,
                Family and Private Groups across various places in the country.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default servicesComponent;
