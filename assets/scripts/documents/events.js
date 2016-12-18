'use strict';

const api = require('./api');
const ui = require('./ui');

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

const addHandlers = () => {
  $('#content').on('click', '#my-files-link', onMyFiles);
};

module.exports = {
  addHandlers,
  // onGetDoc,
  // onGetAllDocs,
  // onGetAllMyDocs,
  // onCreateDoc,
  // onUpdateDoc,
  // onDeleteDoc,
};
