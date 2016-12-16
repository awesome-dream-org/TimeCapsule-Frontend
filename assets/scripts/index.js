'use strict';
require('../styles/index.scss');
const authEvents = require('./auth/events.js');
const documents = require('./documents/events');
const catEvents = require('./categories/events.js');

$(document).ready(function() {
  $('#sidebar-btn').click(function() {
    $('#sidebar').toggleClass('visible');
  });
  authEvents.addHandlers();
  $('#all-categories-button').on('click', catEvents.onGetAllCats);
  $('#all-documents-button').on('click', documents.onGetAllDocs);
  $('#all-my-documents-button').on('click', documents.onGetAllMyDocs);
  $('#show-document-form').on('submit', documents.onGetDoc);
  $('#create-document-form').on('submit', documents.onCreateDoc);
  $('#update-document-form').on('submit', documents.onUpdateDoc);
  $('#delete-document-form').on('submit', documents.onDeleteDoc);
});
