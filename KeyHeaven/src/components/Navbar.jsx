import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-purple-500 p-4">
        <div className='font-bold text-xl'>
            &lt;KeyHeaven/&gt;
            </div>
      <ul>
        <li className="flex gap-4">
            <a href="/"><img src="..\..\public\home.svg" alt="Home Icon" className="w-6 h-6"/>
            </a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
