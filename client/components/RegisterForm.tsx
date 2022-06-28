import React, { useState } from 'react'

export default function RegisterForm({ setToken }) {
  const [email, setEmail] = useState('Email')
  const [password, setPassword] = useState('Password')
  const [confirmPassword, setConfirmPassword] = useState('Confirm Password')


  async function registerUser(credentials) {
    return fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json())
  }

  async function handleSubmit() {
    if(password === confirmPassword){
        const token = await registerUser({
        email,
        password,
        })
        setToken(token)
    }
    else{
        
    }
  }

  return (
    <div>
      <div className="flex">
        <div className="w-1/2">EP</div>
        <div className="flex w-1/2 justify-end">Log In</div>
      </div>
      {/* component below */}
      <div className="mx-auto my-24 h-1/2 w-2/3 rounded-3xl py-24 px-24 outline outline-2 lg:w-2/5">
        <div className="flex flex-col gap-2 pb-10">
          <div className="flex justify-center text-3xl">
            Sign up to start planning
          </div>
          <div className="flex justify-center text-lg">
            big man ting yeah its not looking good brev just sign up
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label htmlFor="" className="flex flex-col gap-5 pb-6">
            <input
              className="h-12 w-full rounded-2xl pl-8 text-2xl outline outline-1 outline-blue-600"
              type="email"
              name="email"
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="h-12 w-full rounded-2xl pl-8 text-2xl outline outline-1 outline-blue-600"
              type="password"
              name="password"
              placeholder={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="h-12 w-full rounded-2xl pl-8 text-2xl outline outline-1 outline-blue-600"
              type="password"
              name="password"
              placeholder={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <input
            className="w-min rounded-lg bg-blue-500 px-8 py-2 text-2xl text-white"
            type="submit"
            value="Sign Up"
          />
          {/* <Link/> tag around phrase below to send to forgot password screen */}
        </form>
      </div>
    </div>
  )
}
