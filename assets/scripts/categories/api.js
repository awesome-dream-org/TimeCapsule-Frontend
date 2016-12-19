'use strict';

const app = require('../config.js');

const getAllCats = function() {
  return $.ajax({
    url: app.host + '/categories',
    method: 'GET',
  });
};

module.exports = {
  getAllCats,
};
