import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-purple-500 p-2">
        <div className='font-bold text-xl'>
            &lt;KeyHeaven/&gt;
            </div>
      <ul>
      <li className="flex ">
            <a href=""><img src="/git.png" alt="" className=' mx-2 h-8 border rounded-full'/></a>
            <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" className=' mx-2 h-8 rounded-full'/></a>
            <a href=""><img src="https://img.freepik.com/free-vector/twitter-app-new-logo-x-black-background_1017-45425.jpg?semt=ais_hybrid" alt="" className=' mx-2 h-8 rounded-full'/></a>
        </li> 
      </ul>
    </nav>
  )
}

export default Navbar
