'use strict';

const msg = require('../common/user-messages.js');
const signUpTemplate = require('../templates/sign-up.handlebars');
const signInTemplate = require('../templates/sign-in.handlebars');
const changePasswordTemplate = require('../templates/change-password.handlebars');
const launchTemplate = require('../templates/launch.handlebars');

const showSignUpForm = function() {
  msg.clearUserMessage();
  $('#content').html(signUpTemplate());
};

const showSignInForm = function() {
  msg.clearUserMessage();
  $('#content').html(signInTemplate());
};

const showChangePasswordForm = function() {
  msg.clearUserMessage();
  $('#content').html(changePasswordTemplate());
};

const showLaunchPage = function() {
  msg.clearUserMessage();
  $('#content').html(launchTemplate());
  $('#launch-page-nav').hide();
};

const failure = function() {
  msg.setUserMessage(msg.genericFailure);
};

module.exports = {
  showSignInForm,
  showSignUpForm,
  showChangePasswordForm,
  showLaunchPage,
  failure,
};
