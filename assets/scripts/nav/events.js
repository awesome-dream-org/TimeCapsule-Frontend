'use strict';

const ui = require('./ui');

// Open the side bar
const onSideBarBtn = function() {
  $('#sidebar').toggleClass('visible');
};

// Sign up link from nav bar
const onSignUpLink = function() {
  ui.showSignUpForm();
  $('#sidebar').toggleClass('visible');
};

// Sign in link from nav bar
const onSignInLink = function() {
  ui.showSignInForm();
  $('#sidebar').toggleClass('visible');
};

// Change PW on nav bar
const onChangePasswordLink = function() {
  ui.showChangePasswordForm();
  $('#sidebar').toggleClass('visible');
};

// Allows user to get back to the launch page from within navbar
const onLaunchPage = function() {
  ui.showLaunchPage();
};

const addHandlers = () => {
  $('#change-password-nav').on('click', onChangePasswordLink);
  $('#sign-in-nav').on('click', onSignInLink);
  $('#sign-up-nav').on('click', onSignUpLink);
  $('#sidebar-btn').on('click', onSideBarBtn);
  $('#launch-page-nav').on('click', onLaunchPage);
};

module.exports = {
  addHandlers,
};
