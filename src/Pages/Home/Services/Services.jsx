import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
					.then((res) => res.json())
					.then((data) => setServices(data));
    },[])
    return (
			<div className='grid lg:grid-cols-3 gap-6'> 
                
				{services.map((service) => (
					<ServiceCard service={service}
					key={service._id}></ServiceCard>
				))}
			</div>
		);
};

export default Services;