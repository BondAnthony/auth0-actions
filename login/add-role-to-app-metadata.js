/**
 * Name: add-role-to-app-metadata
 * Handler that will be called during the execution of a PostLogin flow.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onExecutePostLogin = async (event, api) => {
  // Return the users role from app_metadata
  // When undefined set a default "user" role
  event.user.app_metadata.role = event.user.app_metadata.role || "user";

  // Set the users role to app_metadata
  api.user.setAppMetadata("role", event.user.app_metadata.role);
};
