import { UserManager } from 'oidc-client'

const config = {
  // the URL of our identity server
  authority: 'https://demo.identityserver.io/',
  // this ID maps to the client ID in the identity client configuration
  client_id: 'interactive.public',
  client_root: 'http://localhost:3001',
  apiRoot: 'https://demo.identityserver.io/api/',
  // URL to redirect to after login
  redirect_uri: 'http://localhost:3001/signin-oidc',
  // URL to redirect to after logout
  post_logout_redirect_uri: 'http://localhost:3001/signout-oidc',
  response_type: 'code',
  // the scopes or resources we would like access to
  scope: 'openid profile email api',
}

const userManager = new UserManager(config)

const getUser = async () => {
  return userManager.getUser()
}
const login = async () => {
  return userManager.signinRedirect()
}

const renewToken = async () => {
  return userManager.signinSilent()
}

const logout = async () => {
  return userManager.signoutRedirect()
}

export { getUser, login, renewToken, logout }
