import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

export default Home = (props) => {
  const user = Meteor.user();
  return <div>
        <header id="home">
          <div className="header-content">
            <div className="header-content-inner">
              <h1>Home.</h1>
              <hr />
              <p>
                Here is where all of the basic info about the hackathon goes.
              </p>
            </div>
          </div>
        </header>
        <section id="projects">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2>Projects</h2>
                <hr className="light" />
                <p>Project Information</p>
              </div>
            </div>
          </div>
        </section>
        <section id="schedule">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2>Schedule</h2>
                <hr className="light" />
                <p>Schedule Information</p>
              </div>
            </div>
          </div>
        </section>
      </div>
}
