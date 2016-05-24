import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Schedule from './pages/Schedule';
import AdminLogin from './pages/AdminLogin';
import Perf from 'react-addons-perf';

if (process.env.NODE_ENV === 'development') {
  window.Perf = Perf;
}

var navigationRoutes = FlowRouter.group({
  name: 'nav'
});

navigationRoutes.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, { content: () => <Home /> });
  },
});

navigationRoutes.route('/projects', {
  name: 'projects',
  action() {
    mount(MainLayout, { content: () => <Projects /> });
  },
});

navigationRoutes.route('/schedule', {
  name: 'schedule',
  action() {
    mount(MainLayout, { content: () => <Schedule /> });
  },
});

var privateRoutes = FlowRouter.group({
  name: 'private'
});

privateRoutes.route('/login', {
  name: 'login',
  action() {
    mount(MainLayout, { content: () => <AdminLogin />});
  }
});