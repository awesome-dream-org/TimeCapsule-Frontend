'use strict';
require('../styles/index.scss');

$(document).ready(function() {
  $('#sidebar-btn').click(function() {
    $('#sidebar').toggleClass('visible');
  });
});
