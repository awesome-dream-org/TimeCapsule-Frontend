'use strict';

const myFilesTemplate = require('../templates/my-files.handlebars');
const uploadFileTemplate = require('../templates/upload-file.handlebars');

const showMyDocs = function(myFiles){
  console.log(myFiles);
  $('#content').html(myFilesTemplate(myFiles));
};

const showCreateDocForm = function(){
  $('#content').html(uploadFileTemplate());
};

const createDocSuccess = function(data){
  console.log(data);
};

const getAllDocsSuccess = function(data){
  console.log(data);
};

const getDocSuccess = function(data){
  window.location.assign(data.doc.url);
};


const updateDocSuccess = function(data){
  console.log(data);
};

const deleteDocSuccess = function(data){
  console.log(data);
};

const failure = function(error){
  console.error(error);
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
