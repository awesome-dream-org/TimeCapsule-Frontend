'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const docsApi = require('./api');
const docsUi = require('./ui');


const onGetAllDocs = function(event){
  event.preventDefault();

  docsApi.getAllDocs()
    .then(docsUi.getAllDocsSuccess)
    .catch(docsUi.failure);
};

const onGetAllMyDocs = function(event){
  event.preventDefault();

  docsApi.getAllMyDocs()
    .then(docsUi.getAllMyDocsSuccess)
    .catch(docsUi.failure);
};

const onGetDoc = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  let id = data.doc.id;

  // console.log("onGetDoc ran, and data is ", data);
  // console.log("onGetDoc ran, and id is ", id);

  docsApi.getDoc(id)
    .then(docsUi.getDocSuccess)
    .catch(docsUi.failure);
};


const onCreateDoc = function(event){
  event.preventDefault();

  let data = new FormData(event.target);
  // console.log("onCreateDoc ran, and data is ", data);

  docsApi.createDoc(data)
    .then(docsUi.createDocSuccess)
    .catch(docsUi.failure);
};


const onUpdateDoc = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  console.log("onUpdateDoc ran and data is ", data);

  docsApi.updateDoc(data)
    .then(docsUi.updateDocSuccess)
    .catch(docsUi.failure);
};


const onDeleteDoc = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  let id = data.doc.id;

  console.log("onDeleteDoc ran, and data is ", data);
  console.log("onDeleteDoc ran, and id is ", id);

  docsApi.deleteDoc(id)
    .then(docsUi.deleteDocSuccess)
    .catch(docsUi.failure);
};


module.exports = {
  onGetDoc,
  onGetAllDocs,
  onGetAllMyDocs,
  onCreateDoc,
  onUpdateDoc,
  onDeleteDoc,
};
