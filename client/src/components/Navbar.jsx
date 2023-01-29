import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <header className='grid grid-cols-2 py-4 md:px-28 px-12 bg-gray-800/80'>
        <div className='flex items-center' >
          <Link className='md:text-2xl text-xl font-extralight hover:opacity-90' to='/'>My<span className='font-bold'>Tasks</span></Link>
        </div>
        <ul className='flex gap-x-6 justify-end items-center md:text-lg font-bold'>
            <li><Link className='md:text-lg text-base hover:opacity-90 hover:text-indigo-300' to='/' >All</Link></li>
            <li><Link className='md:text-lg text-base hover:opacity-90 hover:text-indigo-300' to='/tasks/done' >Done</Link></li>
            <li><Link className='md:text-lg text-base bg-indigo-600 py-2 px-3 rounded-xl hover:bg-indigo-600/70' to='/task/new' >New</Link></li>
        </ul>
    </header>
  )
}

export default Navbar