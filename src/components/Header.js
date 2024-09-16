import React,{useState} from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    console.log('hi');
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-cyan-800 p-4 mx-auto md:ml-3 md:mr-3 rounded-md max-w-screen-2xl mt-2">
      <div className="container flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Nikhil Nyamatabad</Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6 text-base md:text-xl text-white">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>          
          <li><Link to="/resume" className="hover:text-yellow-400">Resume</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu (shown on small screens) */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 text-center text-base md:text-xl text-white">
          <li><Link to="/" className="block py-2 hover:text-yellow-400" onClick={toggleMenu}>Home</Link></li>          
          <li><Link to="/resume" className="block py-2 hover:text-yellow-400" onClick={toggleMenu}>Resume</Link></li>
          <li><Link to="/projects" className="block py-2 hover:text-yellow-400" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" className="block py-2 hover:text-yellow-400" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
