import React, { useState } from 'react'

export default function LoginForm({ setToken }) {
  const [email, setEmail] = useState('Email')
  const [password, setPassword] = useState('Password')

  async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json())
  }

  async function handleSubmit() {
    const token = await loginUser({
    email,
    password,
    })
    console.log("hello")
    setToken(token)
  }

  return (
    <div>
      <div className="flex">
        <div className="w-1/2">EP</div>
        <div className="flex w-1/2 justify-end">Sign Up</div>
      </div>
      {/* component below */}
      <div className="mx-auto my-24 h-1/2 w-2/5 py-12 px-24">
        <div>Login</div>
        <div>Lorem impus cock</div>
        <form onSubmit={handleSubmit} className="">
          <label htmlFor="" className="">
            <input
              className="w-full"
              type="email"
              name="email"
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full"
              type="password"
              name="password"
              placeholder={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="Log In" />
          <div>Forgot password?</div>
        </form>
      </div>
    </div>
  )
}
