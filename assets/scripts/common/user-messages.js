'use strict';

// General messages
const genericError = 'Something went wrong. Try again?';

// Auth messages
const invalidEmail = 'Your email is not valid. Try again?';
const mismatchedPasswords = 'These passwords don\'t match. Try again?';
const missingInput = 'You are missing some fields. Try again?';
const signUpSuccess = 'You have successfully signed up. Please log-in with your new credentials.';
const invalidCredentials = 'The username or password you entered is incorrect. Try again?';
const invalidCurrentPassword = 'Your current password is incorrect. Try again?';
const signOutSuccess = 'You have successfully signed out.';
const changePasswordSuccess = 'You have successfully changed your password.';

// Doc messages
const createSuccess = 'Document has been uploaded successfully.';
const downloadSuccess = 'Document has been downloaded successfully.';
const updateSuccess = 'Document has been updated successfully.';
const deleteSuccess = 'Document has been deleted successfully.';
const noUserDocs = "You don't have any files. Please select 'Launch Page' from the nav bar to go back.";
const noDocs = "There aren't currently any files. Please select 'Launch Page' from the nav bar to go back.";
const updateDocInvalidTitle = "You can't have a blank title. Try again?";

const userMessageElement = '#user-message';

const clearUserMessage = () => {
  $(userMessageElement).hide();
  $(userMessageElement).text('&nbsp;');
};

const setUserMessage = (message) => {
  $(userMessageElement).show();
  $(userMessageElement).text(message);
};

module.exports = {
  clearUserMessage,
  setUserMessage,
  genericError,
  invalidEmail,
  mismatchedPasswords,
  missingInput,
  signUpSuccess,
  invalidCredentials,
  signOutSuccess,
  invalidCurrentPassword,
  changePasswordSuccess,
  createSuccess,
  downloadSuccess,
  updateSuccess,
  deleteSuccess,
  noUserDocs,
  noDocs,
  updateDocInvalidTitle,
};
