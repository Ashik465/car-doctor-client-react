import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [serviceData, setServiceData] = useState([]);

  const [showAll, setShowAll] = useState(false);
  const [ascending, setAscending] = useState(true);
  const searchRef = useRef(null)
  const [searchText, setSearchText] = useState("")

  

  useEffect(() => {
    fetch(
      `https://car-doctor-server-eight-eta.vercel.app/services?search=${searchText}&sort=${
        ascending ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, [ascending , searchText]);

  const moreService = showAll ? serviceData : serviceData.slice(0, 3);


// search function

   const handleSearch = () => {
      setSearchText(searchRef.current.value)
     
       
   }

 



  return (
    <div className=" my-7">
      {/* our service area text section  */}
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold text-orange-500"> Service</h3>
        <h2 className=" text-black font-bold text-5xl">Our Service Area</h2>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which do not look even slightly
          believable.{" "}
        </p>
          
          <div className="flex justify-center "><div className="form-control ">
          <div className="input-group">
            <input
               ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div></div>
        

        <button
          onClick={() => setAscending(!ascending)}
          className=" btn btn-primary"
        >
          {" "}
          {ascending ? " Price: High to Low" : "Price: Low to High"}{" "}
        </button>
      </div>
      {/* our service area card section  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {moreService?.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>

      <div className=" text-center my-5 ">
        {moreService.length === 3 ? (
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-outline  text-orange-500"
          >
            More Services
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="btn btn-outline  text-orange-500"
          >
            less Services
          </button>
        )}
      </div>
    </div>
  );
};

export default Service;
