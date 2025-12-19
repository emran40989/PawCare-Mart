import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularSkills = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-8 bg-base-200 rounded-lg">
      <h2 className="text-3xl text-center font-bold my-4">Pets & Supplies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 container mx-auto">
        {services.slice(0, 3).map((service) => (
          <div key={service.serviceId} className="w-full gap-2">
            <div className="border border-gray-300 rounded-lg shadow-md bg-white relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-2xl p-2"
              />
              <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
                {service.category}
              </div>
              <div className="p-3">
                <div className="text-lg font-bold mb-2 text-black">
                  {service.title}
                </div>
                <div className="flex justify-between mb-3">
                  <div className="text-sm text-black font-semibold">
                    Rating:{" "}
                    <span className="text-yellow-600">{service.rating}</span>
                  </div>
                  <div className="bg-gray-100 px-2 py-1 rounded text-sm font-semibold text-gray-800">
                    <span className="text-sm font-semibold">Price: </span>{" "}
                    {service.price} USD/hr
                  </div>
                </div>
                <Link to={`/details/${service.serviceId}`}>
                  <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="btn btn-active btn-primary text-center text-lg font-bold">
          <Link to="/pets-supplies" className="">
            <div className="">Show All</div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PopularSkills;
