import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

Meteor.startup(() => {
  render(
    <Router>
      <Routes />
    </Router>,
    document.getElementById('offbeat'),
  );
});
