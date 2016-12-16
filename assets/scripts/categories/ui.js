'use strict';

const getAllCatsSuccess = function(data){
  console.log(data);
};

const failure = function(error){
  console.error(error);
};

module.exports = {
  getAllCatsSuccess,
  failure,
};
