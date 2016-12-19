'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log("What data is signed up", data);
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.failure);
};

const onSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onSignOut = function(event) {
  event.preventDefault();
  // let data = getFormFields(event.target);
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

// Submit button below sign-up form (with redirect to sign in)
// const onBtnOne = function() {
//   $('.frame').hide();
//   $('.sign-in').show();
//   // $('form').find('input').val('');
//   $('.launch').hide();
//   $('.file-table-one').hide();
//   $('.file-table-two').hide();
// };

// Sign in submit button
// const onBtnTwoLink = function() {
//   $('.frame').hide();
//   $('body').show();
//   $('form').find('input').val('');
//   $('.launch').show();
//   $('.file-table-one').hide();
//   $('.file-table-two').hide();
//   $('.description').hide();
// };

// Change PW submit button
// const onBtnThreeLink = function() {
//   $('.frame').hide();
//   $('body').show();
//   $('form').find('input').val('');
//   $('.launch').show();
//   $('.file-table-one').hide();
//   $('.file-table-two').hide();
//   $('.description').hide();
// };

// Sign out on nav bar and redirects to signout view/message
// const onSignOutLink = function() {
//   $('.frame').hide();
//   $('.sign-out').show();
//   $('#sidebar').toggleClass('visible');
//   $('.launch').hide();
//   $('.file-table-one').hide();
//   $('.file-table-two').hide();
//   $('.description').hide();
// };

const addHandlers = () => {
  $('#content').on('submit', '#sign-up', onSignUp);
  $('#content').on('submit', '#sign-in', onSignIn);
  $('#content').on('submit', '#change-password', onChangePassword);
  $('#sign-out-nav').on('click', onSignOut);

  // $("#btn-one").on('click', onBtnOne);
  // $('#btn-two').on('click', onBtnTwoLink);
  // $('#btn-three').on('click', onBtnThreeLink);
  // $('#sign-out-nav').on('click', onSignOutLink);
};

module.exports = {
  addHandlers,
};
