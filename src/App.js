import logo from './logo.svg'
import './App.css'

import { login, logout, renewToken, getUser } from './services/userService'
import { useState } from 'react'

function App(props) {
  const [result, setResults] = useState([])

  const getUserInfo = async () => {
    let res = await getUser()
    console.log(res)
  }

  const renew = async () => {
    let res = await renewToken()
    console.log(res)
    //setResults([res])
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
            onClick={getUserInfo}
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
            onClick={renew}
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
    </div>
  )
}

export default App
