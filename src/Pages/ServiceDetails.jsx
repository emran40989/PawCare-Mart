import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [service, setService] = useState([]);
    const { myId } = useParams();
    const [loading, setLoading] = useState(true);

    
      useEffect(() => {
        fetch(`http://localhost:3000/services/${myId}`)
          .then((res) => res.json())
          .then((data) => {
            setService(data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      }, [myId]);
      
      if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <div className="flex flex-col items-center justify-center px-[145px]">
            <img src={service?.imageUrl} alt={service?.name} />

        </div>  
    );
};

export default ServiceDetails;