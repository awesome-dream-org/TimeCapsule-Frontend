'use strict';

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

const failure = function(error) {
  console.error(error);
};

module.exports = {
  updateCategorySelect,
  failure,
};
