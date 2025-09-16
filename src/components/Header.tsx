import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Home, User, FolderGit2, Mail } from "lucide-react"; // icons
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <Home size={22} /> },
    { id: "about", icon: <User size={22} /> },
    { id: "projects", icon: <FolderGit2 size={22} /> },
    { id: "contact", icon: <Mail size={22} /> },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300`
    }>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          <div className="text-2xl font-bold text-slate-800">
             
          </div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex space-x-6 px-6 py-3 rounded-2xl backdrop-blur-lg bg-white/20 shadow-md border border-white/30"
        >
        {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              {item.icon}
            </button>
          ))}
        </motion.nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;