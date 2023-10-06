import { useContext } from "react";
import logo from "../assets/logo.svg"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../Providers/AuthProviders";
// import Search from "./Search";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)




    return (
        <div className='max-w-6xl mx-auto my-5'>
            <div className="navbar bg-transparent">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                {/* <Search></Search> */}

                <div className="">
                    <div className='text-[#F9A51A] font-bold flex gap-5 items-center'>
                        <NavLink to="/">News</NavLink>
                        <NavLink to="/about">Destination</NavLink>
                        <NavLink to="/about">Blog</NavLink>
                        <NavLink to="/about">Contact</NavLink>

                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt={user.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
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