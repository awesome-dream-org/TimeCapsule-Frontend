'use strict';

const createDocumentSuccess = function(data){
  console.log(data);
};

const failure = function(error){
  console.error(error);
};

module.exports = {
  createDocumentSuccess,
  failure,
};
