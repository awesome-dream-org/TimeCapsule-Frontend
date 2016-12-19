'use strict';

const getAllCats = function() {
  return $.ajax({
    url: 'https://sheltered-taiga-22202.herokuapp.com/categories',
    method: 'GET',
  });
};

module.exports = {
  getAllCats,
};
