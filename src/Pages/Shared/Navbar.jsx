import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import logo from '../../assets/logo-job.png';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user)

    const handleLogout = () => {
      logout();
    }

    const links = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>Jobs</NavLink></li>
        </>;

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border">
              { links }
            </ul>
          </div>
          <a className="text-xl">
            <img className="h-14 w-14 cursor-pointer" src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            { links }
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {
            user 
            ?
            <>
              <button onClick={handleLogout} className="btn">Log out</button>
              <img className="h-12 w-12 rounded-full border ring-offset-1" src={user.photoURL} alt="user photo" />
            </>
            : <>
              <Link to='/register' className="btn">Register</Link>
              <Link to='/signin' className="btn">Sign In</Link>
            </>
            // user ? <><img className="h-12 w-12 rounded-full border ring-offset-1" src={user.photoURL} alt="user photo" /> </>: 
          }
          
        </div>
      </div>
    );
};

export default Navbar;