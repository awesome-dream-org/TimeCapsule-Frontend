'use strict';

const msg = require('../common/user-messages.js');

const sortCategoryList = function(categories) {
  return categories.sort(function(a, b) {
    let textA = a.text.toUpperCase(); // ignore upper and lowercase
    let textB = b.text.toUpperCase(); // ignore upper and lowercase
    if (textA < textB) {
      return -1;
    }
    if (textA > textB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
};

const updateCategorySelect = function(data) {
  let categoryList = sortCategoryList(data.categories);
  let list = $('#select-category')[0];
  for (let i = 0; i < categoryList.length; i++) {
    list.options[list.options.length] =
      new Option(
        categoryList[i].text,
        categoryList[i].id);
  }
  $('#select-category').append(list);
};

const updateCategorySelectMulti = function(docs, categories) {
  $('.category-list').each(function(itemNo, item) {
    let categoryList = sortCategoryList(categories);
    let list = $(item)[0];
    for (let i = 0; i < categoryList.length; i++) {
      list.options[list.options.length] =
        new Option(
          categoryList[i].text,
          categoryList[i].id);
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
