'use strict';

// Open the side bar
const onSideBarBtn = function() {
  $('#sidebar').toggleClass('visible');
};

// Sign up link from nav bar
const onSignUpLink = function() {
  $('.frame').hide();
  $('.sign-up').show();
  $('#sidebar').toggleClass('visible');
};

// Sign in link from nav bar
const onSignInLink = function() {
  $('.frame').hide();
  $('.sign-in').show();
  $('#sidebar').toggleClass('visible');
};

// Sign in submit button
const onBtnTwoLink = function() {
  $('.frame').hide();
  $('body').show();
};

// Change PW on nav bar
const onChangePasswordLink = function() {
  $('.frame').hide();
  $('.change-password').show();
  $('#sidebar').toggleClass('visible');
};

// Change PW submit button
const onBtnThreeLink = function() {
  $('.frame').hide();
  $('body').show();
};

// Sign out on nav bar and redirects to signout view/message
const onSignOutLink = function() {
  $('.frame').hide();
  $('.sign-out').show();
  $('#sidebar').toggleClass('visible');
};

const addHandlers = () => {
  $('#sign-out-nav').on('click', onSignOutLink);
  $('#btn-three').on('click', onBtnThreeLink);
  $('#change-password-nav').on('click', onChangePasswordLink);
  $('#btn-two').on('click', onBtnTwoLink);
  $('#sign-in-nav').on('click', onSignInLink);
  $('#sign-up-nav').on('click', onSignUpLink);
  $('#sidebar-btn').on('click', onSideBarBtn);
};

module.exports = {
  addHandlers,
  onSignOutLink,
};
