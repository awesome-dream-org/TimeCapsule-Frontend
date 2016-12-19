'use strict';

const store = require('../store');
const launchTemplate = require('../templates/launch.handlebars');

const signInSuccess = (data) => {
  store.user = data.user;
  $('.frame').hide();
  $('body').show();
  // $('form').find('input').val('');
  $('.launch').show();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
  $('#content').html(launchTemplate());
};

const signOutSuccess = () => {
  $("#messages").text("sign out success");
  $('.frame').hide();
  $('.sign-out').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
};

const changePasswordSuccess = () => {
  $("#messages").text("password changed");
  $('.frame').hide();
  $('body').show();
  // $('form').find('input').val('');
  $('.launch').show();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
};

const signUpSuccess = () => {
  $("#messages").text("sign up success");
  $('.frame').hide();
  $('.sign-in').show();
  // $('form').find('input').val('');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
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
