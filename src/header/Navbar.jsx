import { useContext } from "react";
import logo from "../assets/logo.svg"
import logo2 from "../assets/logo2.svg"
import { Link, NavLink,  useLocation} from 'react-router-dom';
import { AuthContext } from "../Providers/AuthProviders";
// import Search from "./Search";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path
    };

    const linkClass = isActive("/") ? "text-white" : location.pathname.startsWith("/destination/") ? "text-white" : "text-black";




    return (
        <div className='max-w-6xl mx-auto my-5'>
            <div className="navbar bg-transparent">
                <div className="flex-1">
                    <img src={isActive("/") ? logo : location.pathname.startsWith("/destination/") ? logo : logo2} alt="" />
                </div>
                {/* <Search></Search> */}

                <div className="">
                    <div className={` text-white font-bold flex gap-5 items-center`}>
                        <NavLink to="/" className={linkClass}>Home</NavLink>
                        <NavLink to="/about" className={linkClass}>Destination</NavLink>
                        <NavLink to="/about" className={linkClass}>Blog</NavLink>
                        <NavLink to="/about" className={linkClass}>Contact</NavLink>

                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt={user.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 rounded-box w-64">
                                    <li className="">
                                        <p className="btn btn-sm btn-ghost">{user.displayName}</p>
                                        <p className="btn btn-sm btn-ghost">{user.email}</p>

                                    </li>
                                    <li>
                                        <button className="bg-[#F9A51A] text-white w-20 py-2 px-3 mx-auto text-center rounded-md"
                                            onClick={logOut}
                                        >Log Out</button>

                                    </li>
                                </ul>
                            </div>
                                :
                                <Link to="/login">
                                    <button className="bg-[#F9A51A] text-white px-5 py-2 rounded-md">
                                        Login
                                    </button>
                                </Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;