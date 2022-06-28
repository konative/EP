import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  const [token, setToken] = useState()

  if (!token) {
    return <LoginForm setToken={setToken} />
  }

  return <div></div>
}

export default Login
