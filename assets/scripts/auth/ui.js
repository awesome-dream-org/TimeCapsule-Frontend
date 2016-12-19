'use strict';

const store = require('../store');
const launchTemplate = require('../templates/launch.handlebars');
const signInTemplate = require('../templates/sign-in.handlebars');
const titleTemplate = require('../templates/title.handlebars');

const signInSuccess = (data) => {
  store.user = data.user;
  // load the launch page handlebars template
  $('#content').html(launchTemplate());
  // hiding/showing navbar items
  $('#change-password-nav').show();
  $('#sign-out-nav').show();
  $('#sign-up-nav').hide();
  $('#sign-in-nav').hide();
};

const signOutSuccess = () => {
  // redirect user to the title page
  $('#content').html(titleTemplate());
  // close the navbar
  $('#sidebar').toggleClass('visible');
  // hiding/showing navbar items
  $('#change-password-nav').hide();
  $('#sign-out-nav').hide();
  $('#launch-page-nav').hide();
  $('#sign-up-nav').show();
  $('#sign-in-nav').show();
};

const changePasswordSuccess = () => {
  // redirect user to launch page
  $('#content').html(launchTemplate());
};

const signUpSuccess = () => {
  // redirect user to Sign In form
  $('#content').html(signInTemplate());
};

const failure = (error) => {
  console.error(error);
  $("#messages").text("failure");
};

module.exports = {
  failure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess,
};
