'use strict';
require('../styles/index.scss');
const authEvents = require('./auth/events.js');


$(document).ready(function() {
  $('#sidebar-btn').click(function() {
    $('#sidebar').toggleClass('visible');
  });
  authEvents.addHandlers();
});
