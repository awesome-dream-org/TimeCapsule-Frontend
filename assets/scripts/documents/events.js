'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const docsApi = require('./api');
const docsUi = require('./ui');

const onGetAllDocs = function(event){
  event.preventDefault();

  docsApi.getAllDocs()
    .then(docsUi.getAllDocsSuccess)
    .catch(docsUi.failure);
};

const onCreateDocument = function(event){
  event.preventDefault();

  let data = new FormData(event.target);
  console.log("onCreateDocument ran, and data is ", data);

  docsApi.createDocument(data)
    .then(docsUi.createDocumentSuccess)
    .catch(docsUi.failure);
};

module.exports = {
  onGetAllDocs,
  onCreateDocument,
};
