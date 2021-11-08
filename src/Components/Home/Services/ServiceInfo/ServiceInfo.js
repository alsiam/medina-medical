import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../../../hooks/useServices';

const ServiceInfo = () => {

    // all services data here 
    const [services] = useServices();

    // using useparams to get the url id
    const { serviceId } = useParams();

    // getting the matched service with dynamic route 
    const matchedService = services.find(service => service.id === Number(serviceId));

    return (
        <div>
            <div className="container w-11/12 mx-auto pt-28">
                <div className="grid lg:grid-cols-2">
                    <img src={matchedService?.img} alt="" />
                    <div className="text-left px-6">
                        <h2 className="text-4xl pb-3 text-secondary font-semibold">{matchedService?.name}</h2>
                        <p className="text-lg">{matchedService?.description}</p>
                        <Link to="/home"><button className="bg-primary text-light py-2 px-6 font-semibold rounded-md hover:bg-blue-500 mt-4">Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;