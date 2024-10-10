import React from 'react'

const Navbar = () => {
  return <header>
    <div className="container">
        {/* Log section */}
        <div>
            <h1>Log</h1>
        </div>
        {/* Navigation section */}
        <ul>
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