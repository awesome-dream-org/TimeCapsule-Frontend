'use strict';

const myFilesTemplate = require('../templates/my-files.handlebars');
const allFilesTemplate = require('../templates/all-files.handlebars');
const uploadFileTemplate = require('../templates/upload-file.handlebars');
const msg = require('../common/user-messages.js');

const showMyDocs = function(myFiles) {
  $('#content').html(myFilesTemplate(myFiles));
};

const showCreateDocForm = function() {
  $('#content').html(uploadFileTemplate());
};

const createDocSuccess = function() {
  msg.setUserMessage(msg.createSuccess);
};

const getAllDocsSuccess = function(allFiles) {
  $('#content').html(allFilesTemplate(allFiles));
};

const getDocSuccess = function(data) {
  window.location.assign(data.doc.url);
  msg.setUserMessage(msg.downloadSuccess);
};

const updateDocSuccess = function() {
  msg.setUserMessage(msg.updateSuccess);
};

const deleteDocSuccess = function() {
  msg.setUserMessage(msg.deleteSuccess);
};

const failure = function() {
  msg.setUserMessage(msg.genericFailure);
};

module.exports = {
  showMyDocs,
  showCreateDocForm,
  getAllDocsSuccess,
  getDocSuccess,
  createDocSuccess,
  updateDocSuccess,
  deleteDocSuccess,
  failure,
};
