import React from 'react'
import logo from "../../assets/logo.png"
const Navbar = () => {
  return <header>
    <div className="container py-3 flex items-center justify-between">
        {/* Log section */}
        <div>
           <img src={logo} alt="logo" className=''/>
        </div>
        {/* Navigation section */}
        <ul className='hidden md:flex items-center font-semibold gap-5'>
            <li>
                <a href="#">Home</a>
            </li> 
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Products</a>
            </li> 
            <li>
                <a href="#">Customer service</a>
            </li>
             <li>
                <a href="#">Blogs</a>
            </li>
        </ul>
        {/* button section */}
        <div>
            <button className=' border border-black px-4 py-4 rounded-full text-xl font-bold hover:bg-primary hover:text-white transform duration-300 '>Get in Touch</button>
        </div>
    </div>
  </header>
}

export default Navbar