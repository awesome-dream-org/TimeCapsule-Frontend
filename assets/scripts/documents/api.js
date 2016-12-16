'use strict';

// const store = require('../store.js');
const config = require('../config.js');

const getAllDocs = function(){
  return $.ajax({
    url: config.host + '/docs',
    method: 'GET',
  });
};

const getDoc = function(id){
  return $.ajax({
    url: config.host + '/docs' + id,
    method: 'GET',
  });
};

const createDoc = function(data){
  return $.ajax({
    url: config.host + '/docs',
    method: 'POST',
    data,
    contentType: false,
    processData: false,
  });
};

const updateDoc = function(data){
  return $.ajax({
    url: config.host + '/docs' + data.doc.id,
    method: 'PATCH',
    data,
  });
};

const deleteDoc = function(id){
  return $.ajax({
    url: config.host + '/docs' + id,
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
