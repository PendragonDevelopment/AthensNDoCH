import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

export default Home = (props) => {
  const user = Meteor.user();
  return <div>
    <h1>Home.</h1>
    { user ? <div>Welcome { user.profile.name.first }</div> : '' }
    <p>
      Here is where all of the basic info about the hackathon goes.
    </p>
  </div>
}
