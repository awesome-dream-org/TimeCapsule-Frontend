'use strict';

// const ui = require('./ui');

const onSideBarBtn = function() {
  $('#sidebar').toggleClass('visible');
};

const onSignUpLink = function() {
  $('.frame').hide();
  $('.sign-up').show();
  $('#sidebar').toggleClass('visible');
};

const onSignInLink = function() {
  $('.frame').hide();
  $('.sign-in').show();
  $('#sidebar').toggleClass('visible');
};

const onBtnTwoLink = function() {
  $('.frame').hide();
  $('body').show();
};

const onChangePasswordLink = function() {
  $('.frame').hide();
  $('.change-password').show();
  $('#sidebar').toggleClass('visible');
};

const onBtnThreeLink = function() {
  $('.frame').hide();
  $('body').show();
};

const onSignOutLink = function(){
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
