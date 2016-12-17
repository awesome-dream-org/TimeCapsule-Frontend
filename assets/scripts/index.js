'use strict';
require('../styles/index.scss');
const authEvents = require('./auth/events.js');

// Allows user to click icon to open sidebar

$(document).ready(function() {
  $('#sidebar-btn').click(function() {
    $('#sidebar').toggleClass('visible');
  });
  authEvents.addHandlers();
});

// Changes page views depending on what authentication link is clicked

$("#sign-up-nav").click(function() {
  $('.frame').hide();
  $('.sign-up').show();
  $('#sidebar').toggleClass('visible');
});

// $("#btn-one").click(function() {
//   $('.frame').hide();
//   $('.sign-in').show();
//
// });

$("#sign-in-nav").click(function() {
  $('.frame').hide();
  $('.sign-in').show();
  $('#sidebar').toggleClass('visible');
});

$("#btn-two").click(function() {
  $('.frame').hide();
  $('body').show();
});

$("#change-password-nav").click(function() {
  $('.frame').hide();
  $('.change-password').show();
  $('#sidebar').toggleClass('visible');
});

$("#btn-three").click(function() {
  $('.frame').hide();
  $('body').show();
});

$("#sign-out-nav").click(function() {
  $('.frame').hide();
  $('.sign-out').show();
  $('#sidebar').toggleClass('visible');
});

$('form').on('submit', function(event) {
  console.log('hey there you made it', this); // The form being submitted.
  $(this).addClass('buldge');
  let self = this;
  setTimeout(function() {
    $(self).removeClass('buldge');
  }, 250);
});
