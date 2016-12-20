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
  $('#sidebar').toggleClass('visible');
  // $('#dummy-table').dataTable();
});

$('form').on('submit', function() {
  $(this).addClass('buldge');
  let self = this;
  setTimeout(function() {
    $(self).removeClass('buldge');
  }, 250);
});
