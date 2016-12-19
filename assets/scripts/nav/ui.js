'use strict';

const msg = require('../common/user-messages.js');
const signUpTemplate = require('../templates/sign-up.handlebars');
const signInTemplate = require('../templates/sign-in.handlebars');

const showSignUpForm = function() {
  $('#content').html(signUpTemplate());
};

const showSignInForm = function() {
  $('#content').html(signInTemplate());
};

const failure = function() {
  msg.setUserMessage(msg.genericFailure);
};

module.exports = {
  showSignInForm,
  showSignUpForm,
  failure,
};
