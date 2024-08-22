import SS_Logo from "/images/s_and_s_logo.png"

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-purpleone text-purplefour">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-purpleone text-purplelight rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li className="hover:bg-black hover:rounded-md">
                <a className="hover:bg-purpletwo hover:rounded-md hover:text-purpleone">Home</a>
              </li>
              <li className="hover:bg-black hover:rounded-md">
                <a className="hover:bg-purpletwo hover:rounded-md hover:text-purpleone">Products</a>
              </li>
              <li className="hover:bg-black hover:rounded-md">
                <a className="hover:bg-purpletwo hover:rounded-md hover:text-purpleone">About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl px-1"><img  className="w-32 md:w-48" src={SS_Logo} alt=""/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className=" text-purplelight hover:bg-purpletwo hover:rounded-xl hover:text-purpleone">
              <a>Home</a>
            </li>
            <li className="text-purplelight hover:bg-purpletwo hover:rounded-xl hover:text-purpleone">
              <a>Products</a>
            </li>
            <li className="text-purplelight hover:bg-purpletwo hover:rounded-xl hover:text-purpleone">
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-purpleone text-purplelight hover:bg-purplelight hover:text-purpleone border-purplelight">Contact Us</a>
        </div>
      </div>
    </>
  );
};
