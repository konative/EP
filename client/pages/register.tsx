import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  const [token, setToken] = useState()

  if (!token) {
    return <RegisterForm setToken={setToken} />
  }

  return <div></div>
}

export default Register