import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <div className="m-auto flex h-20 max-w-7xl border-t">
        <div className="m-auto flex gap-52  font-light">
          <ul className="flex space-x-28">
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
          <small className="space-x-28">© NAME, 2022</small>
        </div>
      </div>
    </>
  )
}

export default Footer
