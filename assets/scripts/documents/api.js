'use strict';

const store = require('../store.js');
const config = require('../config.js');

const getAllDocs = function(){
  return $.ajax({
    url: config.host + '/docs',
    method: 'GET',
  });
};

const getAllMyDocs = function () {
  return $.ajax({
    url: config.host + '/docs/?restrict=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
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
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
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
  getAllMyDocs,
  createDoc,
  updateDoc,
  deleteDoc,
};
