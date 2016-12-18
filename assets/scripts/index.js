'use strict';

require('../styles/index.scss');
const authEvents = require('./auth/events.js');
const navEvents = require('./nav/events.js');

$(() => {

  // Add event handlers
  authEvents.addHandlers();
  navEvents.addHandlers();

});

$('form').on('submit', function(event) {
  console.log('hey there you made it', this); // The form being submitted.
  $(this).addClass('buldge');
  let self = this;
  setTimeout(function() {
    $(self).removeClass('buldge');
  }, 250);
});
