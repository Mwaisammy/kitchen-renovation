"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type Props = {
  showCTA: boolean;
};

const MainNav = ({ showCTA }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", href: "#home", label: "Home" },
    { id: "about", href: "#about", label: "About" },
    { id: "services", href: "#services", label: "Services" },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "news", href: "#news", label: "News" },
    { id: "contact", href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`bg-[#1d2b28] text-white fixed 
        ${showCTA ? "top-10" : "top-0"} 
        left-0 right-0 z-40 transition-all duration-500
      `}
    >
      <div className="flex items-center justify-between px-6 md:px-20 py-3">
        {/* Logo */}
        <div className="hidden md:flex items-center gap-2">
          <div className="bg-yellow-600 w-10 h-10 rounded flex items-center justify-center">
            <span className="text-white font-bold">K</span>
          </div>
          <div>
            <h3 className="font-semibold">Kitchnox</h3>
            <h3 className="text-sm text-gray-300">Modular Kitchen</h3>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="hover:text-[#b1803b] transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1d2b28] px-6 py-4 space-y-4 border-t border-gray-700">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block text-lg hover:text-[#b1803b] transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MainNav;
