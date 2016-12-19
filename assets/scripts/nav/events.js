'use strict';

const ui = require('./ui');

// Open the side bar
const onSideBarBtn = function() {
  $('#sidebar').toggleClass('visible');
};

// Sign up link from nav bar
const onSignUpLink = function() {
  ui.showSignUpForm();
  // $('.frame').hide();
  // $('.sign-up').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
};

// Sign in link from nav bar
const onSignInLink = function() {
  ui.showSignInForm();
  // $('.frame').hide();
  // $('.sign-in').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
};

// Change PW on nav bar
const onChangePasswordLink = function() {
  ui.showChangePasswordForm();
  // $('.frame').hide();
  // $('.change-password').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
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
