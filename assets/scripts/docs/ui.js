'use strict';

const myFilesTemplate = require('../templates/my-files.handlebars');
const allFilesTemplate = require('../templates/all-files.handlebars');
const uploadFileTemplate = require('../templates/upload-file.handlebars');
const noFilesTemplate = require('../templates/no-files.handlebars');
const msg = require('../common/user-messages.js');

const showMyDocs = function(myFiles) {
  if (myFiles.docs.length < 1) {
    $('#content').html(noFilesTemplate());
    msg.setUserMessage(msg.noUserDocs);
  } else {
    $('#content').html(myFilesTemplate(myFiles));
  }

  $('#launch-page-nav').show();
};

const showCreateDocForm = function() {
  $('#content').html(uploadFileTemplate());
  $('#launch-page-nav').show();
};

const createDocSuccess = function() {
  msg.setUserMessage(msg.createSuccess);
};

const getAllDocsSuccess = function(allFiles) {
  if (allFiles.docs.length < 1) {
    $('#content').html(noFilesTemplate());
    msg.setUserMessage(msg.noUserDocs);
  } else {
    $('#content').html(allFilesTemplate(allFiles));
  }

  $('#launch-page-nav').show();
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
