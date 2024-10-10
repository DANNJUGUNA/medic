import React from 'react'
import logo from "../../assets/logo.png"
const Navbar = () => {
  return <header>
    <div className="container py-3 flex items-center justify-between">
        {/* Log section */}
        <div>
           <img src={logo} alt="logo" className=' mr-4'/>
        </div>
        {/* Navigation section */}
        <ul className='flex items gap-5'>
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
            <button>Get in Touch</button>
        </div>
    </div>
  </header>
}

export default Navbar