import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <>
      <div className="m-auto flex h-20 max-w-7xl">
        <div className="m-auto mx-auto flex gap-72">
          <div className="">LOGO</div>
          <div className="flex space-x-24 font-bold">
            <h3>
              <Link href="/features">Features</Link>
            </h3>
            <h3>
              <Link href="/about">About Us</Link>
            </h3>
            <h3>
              <Link href="/pricing">Pricing</Link>
            </h3>
            <h3>
              <Link href="/login">Login</Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
