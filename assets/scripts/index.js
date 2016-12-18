'use strict';

require('../styles/index.scss');
const authEvents = require('./auth/events.js');
const navEvents = require('./nav/events.js');
const docEvents = require('./documents/events.js');

$(() => {
  authEvents.addHandlers();
  navEvents.addHandlers();
  docEvents.addHandlers();
});

$('form').on('submit', function() {
  console.log('hey there you made it', this);
  $(this).addClass('buldge');
  let self = this;
  setTimeout(function() {
    $(self).removeClass('buldge');
  }, 250);
});
