import HamburgerMenu from "./HmburgerMenu";

const Navbar = () => {
  return (
    <>
      <nav className="bg-trasparent border-gray-200">
        <div className="flex flex-wrap items-center justify-between mx-4 p-4 font-semibold tracking-wider">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-invert">
              Flow
            </span>
          </a>
          <HamburgerMenu />
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-invert hover:text-black"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-invert hover:text-black"
                >
                  ARTICLES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-invert border-2 border-invert hover:text-black hover:border-black"
                >
                  SUBSCRIBE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
