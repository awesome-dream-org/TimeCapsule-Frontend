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

$("#auth-one").click(function() {
  $('.frame').hide();
  $('.sign-up').show();
  $('#sidebar').toggleClass('visible');
});

$("#btn-one").click(function() {
  $('.frame').hide();
  $('.sign-in').show();

});

$("#auth-two").click(function() {
  $('.frame').hide();
  $('.sign-in').show();
  $('#sidebar').toggleClass('visible');
});

$("#btn-two").click(function() {
  $('.frame').hide();
  $('body').show();
});

$("#auth-three").click(function() {
  $('.frame').hide();
  $('.change-password').show();
  $('#sidebar').toggleClass('visible');
});

$("#btn-three").click(function() {
  $('.frame').hide();
  $('body').show();
});

$("#auth-four").click(function() {
  $('.frame').hide();
  $('.sign-out').show();
  $('#sidebar').toggleClass('visible');
});
