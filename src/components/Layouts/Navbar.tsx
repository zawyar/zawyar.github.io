import React from 'react'

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="invisible md:visible rounded fixed z-10 bottom-0 w-full ps-2 pe-2">
      <div className="navbar bg-base-100 flex align-baseline grow justify-between">
          <Link className="text-xl btn rounded-full basis-2/12  hover:bg-base-100 hover:text-primary" to="/">Home</Link>
          <Link className="text-xl btn rounded-full basis-2/12 hover:bg-red-600 hover:text-primary " to="/about">About</Link>
          <Link className="text-xl btn rounded-full basis-2/12 hover:bg-blue-600 hover:text-primary " to="/contact">Contact</Link>
          <Link className="text-xl btn rounded-full basis-2/12 hover:bg-purple-600 hover:text-primary " to="/work">Work</Link>
          <Link className="text-xl btn rounded-full basis-2/12 hover:bg-yellow-400 hover:text-primary " to="/blog">Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar