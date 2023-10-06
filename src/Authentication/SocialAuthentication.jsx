import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";
const SocialAuthentication = () => {
    // const navigate = useNavigate()

    const { googleSignIn } = useContext(AuthContext)

    const socialMediaSignIn = (social) => {
        social()
        .then(result => {
            console.log(result.user);
            toast("User Logged In Successful")
        })
        .catch(error => {
            toast(error)
            console.log(error);
        })
    }

    return (
        <div>
            <div>
                <p className="text-center text-3xl text-black my-5">or</p>
            </div>
            <div className="flex cursor-pointer items-center gap-10 border-2 mb-3 border-gray-500 p-2 rounded-full">
                <FaFacebook className="text-3xl text-blue-600"></FaFacebook>
                <p className="text-xl">Continue with Facebook</p>
            </div>
            <div onClick={()=> socialMediaSignIn(googleSignIn)} className="flex cursor-pointer items-center gap-10 border-2 border-gray-500 p-2 rounded-full">
                <FaGoogle  className="text-3xl text-red-400"></FaGoogle>
                <p className="text-xl">Continue with Google</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialAuthentication;