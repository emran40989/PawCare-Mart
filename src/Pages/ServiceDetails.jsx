import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    const { id } = useParams();
    

    
      useEffect(() => {
        fetch("/services.json")
          .then((res) => res.json())
          .then((data) => setServices(data))
          .catch((err) => console.log(err));
      }, []);

        const findResult = services.find(service=> service.serviceId == id);
        console.log(findResult);
        

      

    return (
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto my-8 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
            <img src={findResult?.image} className="" />
        </div>
    );
};

export default ServiceDetails;