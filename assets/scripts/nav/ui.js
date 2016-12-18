'use strict';

const msg = require('../common/user-messages.js');

const failure = function() {
  msg.setUserMessage(msg.genericFailure);
};

module.exports = {
  failure,
};
