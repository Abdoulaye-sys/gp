"use client"; // Ajouter cette ligne en haut du fichier

import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaPlane, FaUser, FaCog, FaPhone, FaServer } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Vols', href: '/vols' },
    { name: 'Connexion', href: '/connexion' },
    { name: 'Admin', href: '/admin' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          GP Djoni Djoni
        </div>
        
        {/* Menu Hamburger (Mobile) */}
        <button 
          onClick={toggleMenu} 
          className="sm:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links */}
        <div className={`sm:flex space-x-6 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
