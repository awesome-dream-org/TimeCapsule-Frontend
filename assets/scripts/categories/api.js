'use strict';

const getAllCats = function() {
  return $.ajax({
    url: 'http://localhost:4741/categories',
    method: 'GET',
  });
};

module.exports = {
  getAllCats,
};
