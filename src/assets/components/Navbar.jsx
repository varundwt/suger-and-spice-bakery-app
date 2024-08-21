import SS_Logo from "/images/s_and_s_logo.png"

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-black"
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
              className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li className="hover:bg-black hover:rounded-md">
                <a>Home</a>
              </li>
              <li className="hover:bg-black hover:rounded-md">
                <a>Products</a>
              </li>
              <li className="hover:bg-black hover:rounded-md">
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl px-1"><img  className="w-32 md:w-48" src={SS_Logo} alt=""/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-black hover:rounded-md">
              <a>Home</a>
            </li>
            <li className="hover:bg-black hover:rounded-md">
              <a>Products</a>
            </li>
            <li className="hover:bg-black hover:rounded-md">
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-orange-300 text-black hover:bg-amber-600 hover:text-white">Contact Us</a>
        </div>
      </div>
    </>
  );
};
