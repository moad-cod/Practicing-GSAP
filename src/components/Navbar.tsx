import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2 my-6 mx-22'>
      <a className="text-3xl font-bold text-white transition hover:text-amber-500 cursor-pointer" href="" >STACK</a>
      <a className="text-3xl font-bold text-white transition hover:text-amber-500 cursor-pointer" href="">PROJECTS</a>
      <a className="text-3xl font-bold text-white transition hover:text-amber-500 cursor-pointer" href="">CV</a>
    </div>
  )
}

export default Navbar
