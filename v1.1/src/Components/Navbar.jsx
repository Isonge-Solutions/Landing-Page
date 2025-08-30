import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="relative">

      <div className="relative z-10 flex justify-center h-full">
        <div className="top-0 z-50 rounded-md h-10 w-full">
          <div className="container px-4 pt-2 mx-auto relative text-sm pb-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl tracking-tight ml-2 text-black">
                Isonge <span className="text-accent">Solutions</span>
              </h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-end flex-shrink-0 rounded-md">
              <ul className="mx-10 text-2xl text-black text-right items-center flex space-x-5">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="hover:text-CustomGold text-black"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg p-4 mr-4">
              <ul className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index} className="text-center">
                    <a
                      href={item.href}
                      className="block py-2 text-black hover:bg-accent rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
