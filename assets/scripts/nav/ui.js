'use strict';

const failure = (error) => {
  console.error(error);
  $("#messages").text("failure");
};

module.exports = {
  failure,
};
