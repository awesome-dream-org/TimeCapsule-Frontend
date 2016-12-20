'use strict';

const store = require('../store.js');
const config = require('../config.js');

const getAllDocs = function () {
  return $.ajax({
    url: config.host + '/docs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
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

const getDoc = function (id) {
  return $.ajax({
    url: config.host + '/docs/' + id,
    method: 'GET',
  });
};

const createDoc = function (data) {
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

const updateDoc = function (id, title, category) {
  return $.ajax({
    url: config.host + '/docs/' + id,
    method: 'PATCH',
    data: {
      doc: {
        title: title,
        category: category,
      },
    },
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const deleteDoc = function (id) {
  return $.ajax({
    url: config.host + '/docs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
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
