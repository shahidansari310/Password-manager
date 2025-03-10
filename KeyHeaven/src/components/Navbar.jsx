import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-purple-500 p-2">
      <div className='font-bold text-xl'>
        &lt;KeyHeaven/&gt;
      </div>
      <ul>
        <li className="flex ">
          <a href="https://github.com/shahidansari310"><img src="/git.png" alt="" className=' mx-1 h-6 border rounded-full' /></a>
          <a href="https://www.linkedin.com/in/shahid-ansari-433449327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk4XJzmbETVKm2xLJkOBFdQ%3D%3D"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" className=' mx-1 h-6 rounded-full' /></a>
          <a href="https://x.com/Shahid__310"><img src="https://img.freepik.com/free-vector/twitter-app-new-logo-x-black-background_1017-45425.jpg?semt=ais_hybrid" alt="" className=' mx-1 h-6 rounded-full' /></a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
