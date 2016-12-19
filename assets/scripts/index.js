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
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
});

$("#btn-one").click(function() {
  $('.frame').hide();
  $('.sign-in').show();
  $('form').find('input').val('');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
});

$("#sign-in-nav").click(function() {
  $('.frame').hide();
  $('.sign-in').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
});

$("#btn-two").click(function() {
  $('.frame').hide();
  $('body').show();
  $('form').find('input').val('');
  $('.launch').show();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
});

$("#change-password-nav").click(function() {
  $('.frame').hide();
  $('.change-password').show();
  $('#sidebar').toggleClass('visible');
  $('.launch').hide();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
});

$("#btn-three").click(function() {
  $('.frame').hide();
  $('body').show();
  $('form').find('input').val('');
  $('.launch').show();
  $('.file-table-one').hide();
  $('.file-table-two').hide();
  $('.description').hide();
});

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

$(".one").click(function() {
  $('.launch').hide();
  $('.file-table-one').show();
  $('.file-table-two').hide();
  $('.description').hide();
});

$(".two").click(function() {
  $('.launch').hide();
  $('.file-table-two').show();
  $('.file-table-one').hide();
  $('.description').hide();
});


$('form').on('submit', function(event) {
  console.log('hey there you made it', this); // The form being submitted.
  $(this).addClass('buldge');
  let self = this;
  setTimeout(function() {
    $(self).removeClass('buldge');
  }, 250);
});
