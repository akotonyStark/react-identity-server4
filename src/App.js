import logo from './logo.svg'
import './App.css'
import { UserManager } from 'oidc-client'
import { config } from '../src/services/userService'

function App(props) {
  // initialise!
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

  return (
    <div className='App'>
      <div className='row'>
        <div className='col-md-12 text-center' style={{ marginTop: '30px' }}>
          <button
            className='btn btn-primary btn-login'
            style={{ margin: '10px' }}
            onClick={login}
          >
            Login
          </button>
          <button
            className='btn btn-secondary btn-getuser'
            style={{ margin: '10px' }}
            onClick={getUser}
          >
            Get User info
          </button>
          <button
            className='btn btn-warning btn-getapi'
            style={{ margin: '10px' }}
            onClick={props.callApi}
          >
            Call API
          </button>
          <button
            className='btn btn-success btn-renewtoken'
            style={{ margin: '10px' }}
            onClick={renewToken}
          >
            Renew Token
          </button>
          <button
            className='btn btn-dark btn-logout'
            style={{ margin: '10px' }}
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>

      <div>Response</div>
    </div>
  )
}

export default App
