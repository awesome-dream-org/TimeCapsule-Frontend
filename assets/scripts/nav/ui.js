'use strict';

const msg = require('../common/user-messages.js');
const signUpTemplate = require('../templates/sign-up.handlebars');
const signInTemplate = require('../templates/sign-in.handlebars');
const changePasswordTemplate = require('../templates/change-password.handlebars');
const launchTemplate = require('../templates/launch.handlebars');

const showSignUpForm = function() {
  $('#content').html(signUpTemplate());
};

const showSignInForm = function() {
  $('#content').html(signInTemplate());
};

const showChangePasswordForm = function() {
  $('#content').html(changePasswordTemplate());
};

const showLaunchPage = function() {
  $('#content').html(launchTemplate());
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
