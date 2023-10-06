import { useParams, useLoaderData } from "react-router-dom";
import Navbar from "../header/Navbar";
import Search from "../header/Search";

const DestinationDetails = () => {
    const destination = useLoaderData()

    const { id } = useParams()
    const idInt = parseInt(id)


    const tours = destination.find(tour => tour.id === idInt)
    // console.log(tours);
    const { name, description, image } = tours;
    // console.log(name, description, image);





    return (
        <div>
            <div className="background-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="relative">
                <Navbar></Navbar>
                <div className="absolute md:top-4 md:left-96">
                    <Search></Search>
                </div>
            </div>
            <div className="flex gap-32 items-center h-[80vh] max-w-7xl mx-auto">
                <div className="destination-info flex-1">
                    <h2 className="text-7xl text-white font-bold">{name}</h2>
                    <p className="text-base text-gray-300 mt-5">{description}</p>
                </div>
                <div className="flex-1">
                    <form className="card-body bg-white w-[400px] rounded-md">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" placeholder="Write your origin" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" placeholder="Destination" className="input input-bordered" required />
                        </div>
                        <div className="flex gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">From</span>
                                </label>
                                <input type="date" placeholder="Destination" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">To</span>
                                </label>
                                <input type="date" placeholder="Destination" className="input input-bordered" required />
                            </div>
                        </div>
                        <button className="bg-[#F9A51A] py-3 rounded-md text-black font-semibold">Start Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;