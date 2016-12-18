'use strict';

const api = require('./api');
const ui = require('./ui');
const catEvents = require('../categories/events.js');

// const onGetAllDocs = function(event){
//   event.preventDefault();
//
//   api.getAllDocs()
//     .then(ui.getAllDocsSuccess)
//     .catch(ui.failure);
// };
//
// const onGetAllMyDocs = function(event){
//   event.preventDefault();
//
//   api.getAllMyDocs()
//     .then(ui.getAllMyDocsSuccess)
//     .catch(ui.failure);
// };
//
// const onGetDoc = function(event){
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//   let id = data.doc.id;
//
//   // console.log("onGetDoc ran, and data is ", data);
//   // console.log("onGetDoc ran, and id is ", id);
//
//   api.getDoc(id)
//     .then(ui.getDocSuccess)
//     .catch(ui.failure);
// };
//
//
// const onCreateDoc = function(event){
//   event.preventDefault();
//
//   let data = new FormData(event.target);
//   // console.log("onCreateDoc ran, and data is ", data);
//
//   api.createDoc(data)
//     .then(ui.createDocSuccess)
//     .catch(ui.failure);
// };
//
//
// const onUpdateDoc = function(event){
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//   console.log("onUpdateDoc ran and data is ", data);
//
//   api.updateDoc(data)
//     .then(ui.updateDocSuccess)
//     .catch(ui.failure);
// };
//
//
// const onDeleteDoc = function(event){
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//   let id = data.doc.id;
//
//   console.log("onDeleteDoc ran, and data is ", data);
//   console.log("onDeleteDoc ran, and id is ", id);
//
//   api.deleteDoc(id)
//     .then(ui.deleteDocSuccess)
//     .catch(ui.failure);
// };

const onMyFiles = function() {
  event.preventDefault();
  api.getAllMyDocs()
    .then(ui.showMyDocs)
    .catch(ui.failure);
};

const onUploadFile = function(event) {
  event.preventDefault();
  ui.showCreateDocForm();
  catEvents.onGetAllCats(event);
};

const onCreateDoc = function(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  api.createDoc(data)
    .then(ui.createDocSuccess)
    .catch(ui.failure);
};

const onDownloadDoc = function(event) {
  event.preventDefault();
  let id = event.target.id.replace('download-','');
  api.getDoc(id)
    .then(ui.getDocSuccess)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('#content').on('click', '#my-files-link', onMyFiles);
  $('#content').on('click', '#upload-file-link', onUploadFile);
  $('#content').on('submit', '#create-document-form', onCreateDoc);
  $('#content').on('click', '.download-btn', onDownloadDoc);

};

module.exports = {
  addHandlers,
  onCreateDoc,
  onDownloadDoc,
  // onGetDoc,
  // onGetAllDocs,
  // onGetAllMyDocs,
  // onCreateDoc,
  // onUpdateDoc,
  // onDeleteDoc,
};
