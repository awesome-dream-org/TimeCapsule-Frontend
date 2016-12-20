'use strict';

const store = require('../store');
const launchTemplate = require('../templates/launch.handlebars');
const signInTemplate = require('../templates/sign-in.handlebars');
const titleTemplate = require('../templates/title.handlebars');
const msg = require('../common/user-messages.js');

const signInSuccess = (data) => {
  store.user = data.user;
  // load the launch page handlebars template
  let delay = 1000; //1 second
  setTimeout(function() {
    $('#content').html(launchTemplate());
  }, delay);
  // hiding/showing navbar items
  $('#change-password-nav').show();
  $('#sign-out-nav').show();
  $('#sign-up-nav').hide();
  $('#sign-in-nav').hide();
  $('.header-user').text('Welcome ' + data.user.email);
  msg.clearUserMessage();
};

const signInFailure = () => {
  msg.setUserMessage(msg.invalidCredentials);
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
  $('.header-user').text('');
  msg.setUserMessage(msg.signOutSuccess);
};

const changePasswordSuccess = () => {
  // redirect user to launch page
  let delay = 1000; //1 second
  setTimeout(function() {
    $('#content').html(launchTemplate());
  }, delay);
  msg.setUserMessage(msg.changePasswordSuccess);
};

const signUpSuccess = () => {
  // redirect user to Sign In form
  let delay = 1000; //1 second
  setTimeout(function() {
    $('#content').html(signInTemplate());
  }, delay);
  msg.setUserMessage(msg.signUpSuccess);
};

const failure = (error) => {
  console.error(error);
  msg.setUserMessage(msg.genericError);
};

module.exports = {
  failure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess,
  signInFailure,
};
