import React, { useEffect, useState, useRef } from "react";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
},[]);

  return (
    <>
    <div className="relative" ref={menuRef}>
      <div className="relative">
        <button
          id="hamburger-button"
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="ring ring-invert text-invert inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <nav
          id="hamburger-nav"
          className={`absolute right-0 top-11 p-2 bg-secondary w-[15rem] h-auto z-10 opacity-70 rounded-sm border-5 border-4 border-invert

            ${menuOpen ? "" : "hidden"}`}
        >
          <ul className="text-invert bg-secondary font-semibold tracking-wider space-y-5 py-5 text-center flex flex-col justify-center items-center">
            <button className="w-full h-10 hover:bg-white">
              <li className="hover:text-black">HOME</li>
            </button>
            <div className="w-5 h-1 rounded-sm bg-invert"></div>
            <button className="w-full h-10 hover:bg-white">
              <li className="hover:text-black">ARTICLE</li>
            </button>
            <div className="w-5 h-1 rounded-sm bg-invert"></div>
            <button className="w-full h-10 hover:bg-white">
              <li className="hover:text-black">SUBSCRIBE</li>
            </button>
            <div className="w-5 h-1 rounded-sm bg-invert"></div>
          </ul>
        </nav>
      </div>
      </div>

    </>
  );
};

export default HamburgerMenu;
