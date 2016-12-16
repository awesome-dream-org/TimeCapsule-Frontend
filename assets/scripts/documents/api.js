'use strict';

const getAllDocs = function(){
  return $.ajax({
    url: 'http://localhost:4741/docs',
    method: 'GET',
  });
};

const getDoc = function(id){
  return $.ajax({
    url: 'http://localhost:4741/docs/' + id,
    method: 'GET',
  });
};

const createDoc = function(data){
  return $.ajax({
    url: 'http://localhost:4741/docs',
    method: 'POST',
    data,
    contentType: false,
    processData: false,
  });
};

const updateDoc = function(data){
  return $.ajax({
    url: 'http://localhost:4741/docs/' + data.document.id,
    method: 'PATCH',
    data,
  });
};

const deleteDoc = function(id){
  return $.ajax({
    url: 'http://localhost:4741/docs/' + id,
    method: 'DELETE',
  });
};


module.exports = {
  getDoc,
  getAllDocs,
  createDoc,
  updateDoc,
  deleteDoc,
};
