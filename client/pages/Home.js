import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

export default Home = (props) => {
  const user = Meteor.user();
  return <header>
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
}
