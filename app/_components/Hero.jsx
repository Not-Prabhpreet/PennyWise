import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:justify-start">
        <div className="mx-auto max-w-xl text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Escape the Broke Blues with Smart Budgeting!
          </h1>
          <h1 className="text-3xl font-extrabold text-primary sm:text-5xl mt-4">
            Make Every Dollar Dance to Your Tune
          </h1>

          <p className="mt-4 sm:text-xl text-relaxed">
            Start Creating your budget and save a ton of money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

