'use strict';

require('../styles/index.scss');
const authEvents = require('./auth/events.js');
const navEvents = require('./nav/events.js');
const docEvents = require('./docs/events.js');

$(() => {
  authEvents.addHandlers();
  navEvents.addHandlers();
  docEvents.addHandlers();
});

// Changes page views depending on what authentication link is clicked

// Click sign up btn in nav bar
$("#sign-up-nav").click(function() {
  $('.frame').hide();
  $('.sign-up').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
});

// Submit button below sign-up form (with redirect to sign in)
$("#btn-one").click(function() {
  $('.frame').hide();
  $('.sign-in').show();
  $('form').find('input').val('');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
});

// Sign in on side bar
$("#sign-in-nav").click(function() {
  $('.frame').hide();
  $('.sign-in').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
});

// Submit button on sign-in form and directs to launch page
$("#btn-two").click(function() {
  $('.frame').hide();
  $('body').show();
  $('form').find('input').val('');
  $('.launch').show();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
});

// Change password button on nav bar to change pw form
$("#change-password-nav").click(function() {
  $('.frame').hide();
  $('.change-password').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
});

// On change-password form (submit button) and redirects to launch page
$("#btn-three").click(function() {
  $('.frame').hide();
  $('body').show();
  $('form').find('input').val('');
  $('.launch').show();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
});

// Sign out on nav bar and redirects to signout view/message
$("#sign-out-nav").click(function() {
  $('.frame').hide();
  $('.sign-out').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
});

// Launch page button views of data tables

// Go to manage my files
$(".one").click(function() {
  $('.launch').hide();
  $('.file-table-one').show();
  $('.file-table-two').hide();
  $('.description').hide();
});

// Go to view all files
$(".two").click(function() {
  $('.launch').hide();
  $('.file-table-two').show();
  $('.file-table-one').hide();
  $('.description').hide();
});

// NO EVENT HANDLER EVENT YET FOR CREATE

$('form').on('submit', function() {
  $(this).addClass('buldge');
  let self = this;
  setTimeout(function() {
    $(self).removeClass('buldge');
  }, 250);
});
