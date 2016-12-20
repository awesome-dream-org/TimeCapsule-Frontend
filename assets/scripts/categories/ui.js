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

const updateCategorySelectMulti = function(docs, categories) {
  $('.category-list').each(function(itemNo, item) {
    let list = $(item)[0];
    for (let i = 0; i < categories.length; i++) {
      list.options[list.options.length] =
        new Option(
          categories[i].text,
          categories[i].id);
    }
    $(item).append(list);
    $(item).val(docs[itemNo].category);
  });
};

const failure = function() {
  msg.setUserMessage(msg.genericError);
};

module.exports = {
  updateCategorySelect,
  updateCategorySelectMulti,
  failure,
};
