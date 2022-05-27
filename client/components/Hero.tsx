import React from 'react'

function Hero() {
  return (
    <div className="m-auto h-screen max-w-7xl ">
      <div className="flex">
        <div className="max-w-xl py-60 px-28">
          <div className="text-8xl font-bold">Tagline</div>
          <div className="text-xl font-semibold">
            <div className="pt-10 pb-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button className="flex flex-row justify-center gap-2 rounded-full px-6 py-2 font-semibold outline outline-1 hover:outline-0 hover:bg-white hover:text-black">
              <a href="" target="_blank" rel="noreferrer">
                Join Now
              </a>
            </button>
          </div>
        </div>
        <div className="m-auto flex max-w-4xl w-max py-60 px-60 outline outline-1 rounded-3xl">
          <div className="text-6xl font-bold">Image</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
