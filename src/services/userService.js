export const config = {
  // the URL of our identity server
  authority: 'https://demo.identityserver.io/',
  // this ID maps to the client ID in the identity client configuration
  client_id: 'interactive.public',
  client_root: 'http://localhost:3001',
  apiRoot: 'https://demo.identityserver.io/api/',
  // URL to redirect to after login
  redirect_uri: 'http://localhost:3001/signin-oidc',
  response_type: 'code',
  // the scopes or resources we would like access to
  scope: 'openid profile email api',
  // URL to redirect to after logout
  post_logout_redirect_uri: 'http://localhost:3001/signout-oidc',
}
