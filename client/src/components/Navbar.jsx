import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const linkStyle = 'md:text-lg text-base sm:font-bold font-semibold hover:text-indigo-300'
  const active = ' bg-indigo-600 py-2 px-3 rounded-xl hover:bg-indigo-600/70'

  return (
    <header className='flex justify-between py-4 md:px-24 px-10 bg-gray-800/80'>
        <div>
          <Link className='md:text-2xl text-xl font-extralight hover:opacity-90' to='/'>My<span className='font-bold'>Tasks</span></Link>
        </div>
        <ul className='flex md:gap-x-6 gap-x-4 items-center '>
            <li>
              <NavLink 
                className={({isActive}) => linkStyle + (isActive ? active : '')}
                to='/' >All</NavLink>
            </li>
            <li>
              <NavLink 
                className={({isActive}) => linkStyle + (isActive ? active : '')} 
                to='/tasks/done' >Done</NavLink>
            </li>
            <li>
              <NavLink 
                className={({isActive}) => linkStyle + (isActive ? active : '')} 
                to='/task/new' >New</NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Navbar