/**
 * Name: add-uuid-to-app-metadata
 * Handler that will be called during the execution of a PostLogin flow.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onExecutePostLogin = async (event, api) => {
  // Require uuid
  const { v4: uuidv4 } = require("uuid");

  // Create uuid if one is not defined within app_metadata
  event.user.app_metadata.uuid = event.user.app_metadata.uuid || uuidv4();

  // Set the users uuid to app_metadata
  api.user.setAppMetadata("uuid", event.user.app_metadata.uuid);
};
