/**
 * Name: add-user-metadata-to-idtoken
 * Handler that will be called during the execution of a PostLogin flow.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onExecutePostLogin = async (event, api) => {
  // Define a namespace to reduce claim overlap
  const namespace = "https://your-domain.com/claims/";

  // Set the custom claim on the id token
  api.idToken.setCustomClaim(
    namespace + "user_metadata",
    event.user.user_metadata
  );

  // Example of no namespace
  // api.idToken.setCustomClaim("user_metadata", event.user.user_metadata);
};
