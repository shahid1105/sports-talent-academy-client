import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li className="text-black md:text-white lg:text-white font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-black md:text-white lg:text-white font-bold">
        <Link to="/menu">Instructors</Link>
      </li>
      <li className="text-black md:text-white lg:text-white font-bold">
        <Link to="/order/salads">Classes</Link>
      </li>
      {user && (
        <li className="text-black md:text-white lg:text-white font-bold">
          <Link>Dashboard</Link>
        </li>
      )}
    </>
  );

  //   fixed z-10 bg-opacity-20
  return (
    <div>
      <div className="navbar  bg-black bg-opacity-70 max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl italic">
            Sports Talent
            <br />
            Academy
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end pr-4">
          {user ? (
            <>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-active btn-ghost">
                  Log Out
                </button>
                <button>
                  <img src="" alt="" />
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
