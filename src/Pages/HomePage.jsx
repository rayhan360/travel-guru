import { useState, useEffect } from "react";

import DestinationSlider from './DestinationSlider';
import DestinationInfo from './DestinationInfo';
import Navbar from "../header/Navbar";
import Search from "../header/Search";

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);
  const [activeDestination, setActiveDestination] = useState(0)

  useEffect(() => {
    // Fetch the JSON data when the component mounts
    fetch("/data.json") // Update the path to your JSON file
      .then((response) => response.json())
      .then((data) => setDestinations(data))
  }, []);



  return (
    <div>
      <div className="relative">
        <Navbar></Navbar>
        <div className="absolute md:top-4 md:left-96">
          <Search></Search>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <DestinationInfo destinations={destinations} activeDestination={activeDestination}></DestinationInfo>
        <DestinationSlider destinations={destinations} activeDestination={activeDestination} setActiveDestination={setActiveDestination}></DestinationSlider>
      </div>
    </div>
  );
};

export default HomePage;