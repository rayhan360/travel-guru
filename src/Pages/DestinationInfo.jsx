/* eslint-disable react/prop-types */
import "./styles.css"
import { FaArrowRight } from "react-icons/fa";

const DestinationInfo = ({ destinations, activeDestination }) => {
    if (!destinations || !destinations.length || activeDestination < 0 || activeDestination >= destinations.length) {
        return <p className="text-center">No destination data available.</p>;
      }
    const { name, description, image } = destinations[activeDestination];


    return (
        <div className="text-white w-[500px]">
            <div className="background-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="destination-info mt-20 ml-20">
                <h2 className="text-7xl font-bold">{name}</h2>
                <p className="text-base text-gray-300 mt-5">{description}</p>
                <button className="text-black mt-5 bg-[#F9A51A] px-5 py-2 rounded-md flex items-center gap-2">Booking <FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default DestinationInfo;
