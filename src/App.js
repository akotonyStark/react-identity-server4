import logo from './logo.svg'
import './App.css'

import { login, logout, renewToken, getUser } from './services/userService'
import { useState } from 'react'

function App(props) {
  const [result, setResults] = useState([])

  const getUserInfo = async () => {
    let res = await getUser()
    console.log(res)
    let temp = []
    temp.push(res.access_token)
    temp.push(res.expired)
    temp.push(res.expires_at)
    temp.push(res.expires_in)
    temp.push(res.id_token)
    temp.push(res.refresh_token)
    temp.push(res.scope)
    temp.push(res.session_state)
    setResults(temp)
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

      <div className='row'>
        <div className='col-md-12 text-center' style={{ marginTop: '30px' }}>
          <div style={styles}>
            {result.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

const styles = {
  maxWidth: 700,
  background: '#f1f1f1',
  wordWrap: 'break-word',
  position: 'relative',
  left: '40%',
}
