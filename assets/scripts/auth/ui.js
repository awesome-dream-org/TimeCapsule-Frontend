'use strict';

const store = require('../store');
const launchTemplate = require('../templates/launch.handlebars');

const signInSuccess = (data) => {
  store.user = data.user;
  $('#content').html(launchTemplate());
};

const signOutSuccess = () => {
  $("#messages").text("sign out success");
};

const changePasswordSuccess = () => {
  $("#messages").text("password changed");
};

const signUpSuccess = () => {
  $("#messages").text("sign up success");
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
