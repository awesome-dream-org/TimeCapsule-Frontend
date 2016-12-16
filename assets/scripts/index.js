'use strict';

const documents = require('./documents/events');

$(()=>{
  $('#all-documents-button').on('click', documents.onGetAllDocs);
  $('#create-document-form').on('submit', documents.onCreateDocument);
});
