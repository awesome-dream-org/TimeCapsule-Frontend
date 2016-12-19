'use strict';

const msg = require('../common/user-messages.js');

const updateCategorySelect = function(data) {
  let list = $('#select-category')[0];
  for (let i = 0; i < data.categories.length; i++) {
    list.options[list.options.length] =
      new Option(
        data.categories[i].text,
        data.categories[i].id);
  }
  $('#select-category').append(list);
};

const failure = function() {
  msg.setUserMessage(msg.genericError);
};

module.exports = {
  updateCategorySelect,
  failure,
};
