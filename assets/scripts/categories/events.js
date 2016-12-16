'use strict';

const catsApi = require('./api');
const catsUi = require('./ui');

const onGetAllCats = function(event){
  event.preventDefault();

  catsApi.getAllCats()
    .then(catsUi.getAllCatsSuccess)
    .catch(catsUi.failure);
};

module.exports = {
  onGetAllCats,
};
