'use strict';

const api = require('./api');
const ui = require('./ui');
const catEvents = require('../categories/events.js');
const catUI = require('../categories/ui.js');
const catAPI = require('../categories/api.js');

const onMyFiles = function() {
  event.preventDefault();
  api.getAllMyDocs()
    .done(function(docsResult) {
      ui.showMyDocs(docsResult);
      catAPI.getAllCats()
        .done(function(catsResult) {
          catUI.updateCategorySelectMulti(docsResult.docs, catsResult.categories);
        })
      .done(function() {
        $('table').filterTable({
          filterExpression: 'filterTableFindAny',
          minRows: 0
        });
      });
    })
    .fail(ui.failure);
};

const onUpdateDoc = function(event) {
  event.preventDefault();
  let id = event.currentTarget.id.replace('update-', '');
  let title = $('#title-' + id).val();
  let category = $('#category-' + id).val();

  if ($('#title-' + id).val()) {
    api.updateDoc(id, title, category)
      .done(function() {
        ui.updateDocSuccess();
        onMyFiles();
      })
      .fail(ui.failure);
  } else {
    ui.updateDocInvalidTitle();
  }
};

const onGetAllFiles = function(event) {
  event.preventDefault();
  api.getAllDocs()
    .then(ui.getAllDocsSuccess)
    .then(()=>{
      $('table').filterTable({
        filterExpression: 'filterTableFindAny',
        minRows: 0
      });
    })
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
    .catch(ui.createDocFailure);
};

const onDownloadDoc = function(event) {
  event.preventDefault();
  let id = event.currentTarget.id.replace('download-', '');
  api.getDoc(id)
    .then(ui.getDocSuccess)
    .catch(ui.failure);
};

const onDeleteDoc = function(event) {
  event.preventDefault();
  let id = event.currentTarget.id.replace('delete-', '');
  api.deleteDoc(id)
    .done(function() {
      api.getAllMyDocs()
        .done(function() {
          ui.updateDocSuccess();
          onMyFiles();
        })
        .fail(ui.failure);
    })
    .done(ui.deleteDocSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#content').on('click', '#my-files-link', onMyFiles);
  $('#content').on('click', '#upload-file-link', onUploadFile);
  $('#content').on('click', '#all-files-link', onGetAllFiles);
  $('#content').on('submit', '#create-document-form', onCreateDoc);
  $('#content').on('click', '.download-btn', onDownloadDoc);
  $('#content').on('click', '.delete-btn', onDeleteDoc);
  $('#content').on('click', '.update-btn', onUpdateDoc);
};

module.exports = {
  addHandlers,
  onCreateDoc,
  onDownloadDoc,
  onGetAllFiles,
  onUpdateDoc,
};
