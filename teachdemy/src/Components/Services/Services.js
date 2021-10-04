import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
            //    fetch data to ui //


    const [services,setservices]=useState([])

    useEffect( ()=>{
        fetch('./Courses.json').then(res=>res.json()).then(data=>setservices(data));
    }, [])
    
    return (
        <div className="container mt-5">
            <h1> Our Courses </h1>
            <Row xs={1} md={3} className="g-4">

                          {/* map for single product  */}
                         {
                             services.map(service=><Service service={service}
                             key={service._id}
                             ></Service>)
                         }
                         </Row>
        </div>
    );
};

export default Services;