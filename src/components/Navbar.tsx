import { useState } from 'react'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { settings, user } from '../assets'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home')
  const [isOpen, setIsOpen] = useState(false) // State to toggle mobile menu

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Orders', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Tracking Page', href: '#' },
    { name: 'Partner with Us', href: '#' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex justify-between items-center py-2 border-b-[1px] border-black px-4 md:px-16 shadow-md bg-white">
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex items-start space-y-4 md:space-y-0 md:space-x-8 absolute md:relative top-12 left-0 w-full md:w-auto bg-white z-10 md:bg-transparent md:top-auto md:left-auto p-4 md:p-0`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => {
              setActiveLink(link.name)
              setIsOpen(false)
            }}
            className={`relative font-semibold text-md ${
              activeLink === link.name
                ? 'text-black'
                : 'hover:text-gray-700 text-gray-600'
            }`}
          >
            <span>{link.name}</span>
            <span
              className={`${
                activeLink === link.name ? 'w-1/2' : 'w-0'
              } absolute bottom-0 left-1/4 transform -translate-x-1/2 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out`}
            ></span>
          </a>
        ))}
      </div>

      <div className="flex flex-1 justify-end">
        <div className="hidden md:flex md:flex-1 px-10 md:max-w-[16rem]">
          <div className="flex items-center border-b border-black py-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="flex items-center hover:text-gray-700">
            <img src={user} alt="user" className="mr-2" /> Account
          </button>
          <button className="flex items-center hover:text-gray-700">
            <img src={settings} alt="settings" className="mr-2" /> Settings
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-12 left-0 w-full bg-white z-10 p-4`}
      >
        <div className="flex items-center border-b border-black py-2 mb-4">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <button className="flex items-center hover:text-gray-700">
            <img src={user} alt="user" className="mr-2" /> Account
          </button>
          <button className="flex items-center hover:text-gray-700">
            <img src={settings} alt="settings" className="mr-2" /> Settings
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
