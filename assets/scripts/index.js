'use strict';

const documents = require('./documents/events');

$(()=>{
  $('#all-documents-button').on('click', documents.onGetAllDocs);
  $('#show-document-form').on('submit', documents.onGetDoc);
  $('#create-document-form').on('submit', documents.onCreateDocument);
});
