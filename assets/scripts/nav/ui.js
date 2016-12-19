'use strict';

const msg = require('../common/user-messages.js');
const signUpTemplate = require('../templates/sign-up.handlebars');

const showSignUpForm = function() {
  $('#content').html(signUpTemplate());
};

const failure = function() {
  msg.setUserMessage(msg.genericFailure);
};

module.exports = {
  showSignUpForm,
  failure,
};
