'use strict';

const documents = require('./documents/events');

$(()=>{
  $('#create-document-form').on('submit', documents.onCreateDocument);
});
