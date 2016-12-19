'use strict';

require('../styles/index.scss');
const authEvents = require('./auth/events.js');
const navEvents = require('./nav/events.js');
const docEvents = require('./docs/events.js');
const titleTemplate = require('./templates/title.handlebars');

$(() => {
  $('#content').html(titleTemplate);
  authEvents.addHandlers();
  navEvents.addHandlers();
  docEvents.addHandlers();
  $('#change-password-nav').hide();
  $('#sign-out-nav').hide();
  $('#launch-page-nav').hide();
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

// NO EVENT HANDLER EVENT YET FOR CREATE

$('form').on('submit', function() {
  $(this).addClass('buldge');
  let self = this;
  setTimeout(function() {
    $(self).removeClass('buldge');
  }, 250);
});
