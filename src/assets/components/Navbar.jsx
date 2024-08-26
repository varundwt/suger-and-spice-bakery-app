import SS_Logo from "/images/s_and_s_logo.png";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 font-DM1 ">
        <div className="navbar-start">
          <div className="dropdown font-bold">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            ><Link to="/">
              <li className="hover:bg-black hover:rounded-md">
                <a className="text-purpleone hover:bg-purpleone hover:rounded-md hover:text-purplelight">
                  Home
                </a>
              </li>
              </Link>
              <Link to="/products">
              <li className="hover:bg-black hover:rounded-md">
                <a className="text-purpleone hover:bg-purpleone hover:rounded-md hover:text-purplelight">
                  Products
                </a>
              </li>
              </Link>
              <Link to="/about">
              <li className="hover:bg-black hover:rounded-md">
                <a className="text-purpleone hover:bg-purpleone hover:rounded-md hover:text-purplelight">
                  About
                </a>
              </li>
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl px-2">
            <img className="w-32 md:w-48" src={SS_Logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex font-bold">
          <ul className="menu menu-horizontal px-1 tracking-wide">
            <Link to="/">            
            <li className="text-md text-purpleone hover:bg-purplefive hover:rounded-xl hover:text-purplelight">
              <a>Home</a>
            </li>
            </Link>
            <Link to="/products">
            <li className="text-purpleone hover:bg-purplefive hover:rounded-xl hover:text-purplelight">
              <a>Products</a>
            </li>
            </Link>
            <Link to="/about">
            <li className="text-purpleone hover:bg-purplefive hover:rounded-xl hover:text-purplelight">
              <a>About</a>
            </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end font-DM3">
        <Link to="/contact">
          <a className="btn tracking-wide hover:font-medium font-DM1 hover:bg-purpleone hover:text-purplelight bg-purplelight text-purpleone border-purplethree">
            Contact Us
          </a>
          </Link>
        </div>
      </div>
      <Outlet/>
    </>
  );
};
