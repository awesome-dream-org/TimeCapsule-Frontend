'use strict';

const getAllDocsSuccess = function(data){
  console.log(data);
};

const getAllMyDocsSuccess = function(data){
  console.log(data);
};

const getDocSuccess = function(data){
  console.log(data);
};

const createDocSuccess = function(data){
  console.log(data);
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
  getAllDocsSuccess,
  getAllMyDocsSuccess,
  getDocSuccess,
  createDocSuccess,
  updateDocSuccess,
  deleteDocSuccess,
  failure,
};
