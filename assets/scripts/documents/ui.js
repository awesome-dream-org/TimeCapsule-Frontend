'use strict';

const getAllDocsSuccess = function(data){
  console.log(data);
};

const getDocSuccess = function(data){
  console.log(data);
};

const createDocumentSuccess = function(data){
  console.log(data);
};

const failure = function(error){
  console.error(error);
};

module.exports = {
  getAllDocsSuccess,
  getDocSuccess,
  createDocumentSuccess,
  failure,
};
