'use strict';

require('../styles/index.scss');
const authEvents = require('./auth/events.js');
const navEvents = require('./nav/events.js');
const docEvents = require('./docs/events.js');
const titleTemplate = require('./templates/title.handlebars');
const signUpTemplate = require('./templates/sign-up.handlebars');
const signInTemplate = require('./templates/sign-in.handlebars');
const changePassWordTemplate = require('./templates/change-password.handlebars');

$(() => {
  $('#content').html(titleTemplate);
  authEvents.addHandlers();
  navEvents.addHandlers();
  docEvents.addHandlers();
  $('#change-password-nav').hide();
  $('#sign-out-nav').hide();
  $('#launch-page-nav').hide();
  $('#sidebar').toggleClass('visible');
  // $('#dummy-table').dataTable();
});

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

$(signUpTemplate).on('submit', function() {
  $('form').addClass('buldge');
  setTimeout(function() {
    $('form').removeClass('buldge');
  }, 250);
});

$(signInTemplate).on('submit', function() {
  $('form').addClass('buldge');
  setTimeout(function() {
    $('form').removeClass('buldge');
  }, 250);
});

$(changePassWordTemplate).on('submit', function() {
  $('form').addClass('buldge');
  setTimeout(function() {
    $('form').removeClass('buldge');
  }, 250);
});
