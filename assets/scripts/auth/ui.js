'use strict';

const store = require('../store');
const launchTemplate = require('../templates/launch.handlebars');
const signInTemplate = require('../templates/sign-in.handlebars');
const titleTemplate = require('../templates/title.handlebars');
const msg = require('../common/user-messages.js');

const signInSuccess = (data) => {
  store.user = data.user;
  let delay = 1000;
  setTimeout(function () {
    $('#content').html(launchTemplate());
  }, delay);
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
  $('#content').html(titleTemplate());
  $('#sidebar').toggleClass('visible');
  $('#change-password-nav').hide();
  $('#sign-out-nav').hide();
  $('#launch-page-nav').hide();
  $('#sign-up-nav').show();
  $('#sign-in-nav').show();
  $('.header-user').text('');
  msg.setUserMessage(msg.signOutSuccess);
};

const changePasswordSuccess = () => {
  let delay = 1000;
  setTimeout(function () {
    $('#content').html(launchTemplate());
  }, delay);
  msg.setUserMessage(msg.changePasswordSuccess);
};

const signUpSuccess = () => {
  let delay = 1000;
  setTimeout(function () {
    $('#content').html(signInTemplate());
  }, delay);
  msg.setUserMessage(msg.signUpSuccess);
};

const failure = () => {
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
