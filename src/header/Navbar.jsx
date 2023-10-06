import logo from "../assets/logo.svg"
import { Link, NavLink } from 'react-router-dom';
// import Search from "./Search";

const Navbar = () => {
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
                        <Link to="/login">
                            <button className="bg-[#F9A51A] text-white px-5 py-2 rounded-md">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;