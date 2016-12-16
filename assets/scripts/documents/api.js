'use strict';

const createDocument = function(data){
  return $.ajax({
    url: 'http://localhost:4741/docs',
    method: 'POST',
    data,
    contentType: false,
    processData: false,
  });
};

module.exports = {
  createDocument,
};
