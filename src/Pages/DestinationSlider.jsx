/* eslint-disable react/prop-types */
import "./styles.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

const DestinationSlider = ({ destinations, setActiveDestination }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: (index) => setActiveDestination(index),
    };

    return (
        <div className='w-[700px]'>
            <Slider {...settings}>
                {destinations.map((destination, index) => (
                    <div className='px-5' key={index}>
                        {/* <img src={destination.image} alt={destination.name} />
                        <h2>{destination.name}</h2> */}
                        <NavLink to={`/destination/${destination.id}`} className="card bg-base-100 shadow-xl relative">
                            <figure><img src={destination.image} className='h-96' alt={destination.name} /></figure>
                            <h2 className="card-title absolute bottom-0 right-10 text-white">{destination.name}</h2>
                        </NavLink>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DestinationSlider;
