'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetAllCats = function(event){
  event.preventDefault();

  api.getAllCats()
    .then(ui.updateCategorySelect)
    .catch(ui.failure);
};

module.exports = {
  onGetAllCats,
};
