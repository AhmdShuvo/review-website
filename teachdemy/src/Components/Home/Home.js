import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import HomeServce from './HomeServce';

const Home = () => {

    const [services,setservices]=useState([])

    useEffect(()=>{
        fetch("./Courses.json").then(res=>res.json()).then(data=>setservices(data.slice(0,4)))
    },[])
   
    return (
        <div >
           <div className=" container d-md-flex align-items-center">
           <div>
                <img src='./image/Header-img.png' alt="" />
            </div>
            <div>
                <h3>Learn Without Limits</h3>
                <p>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
            </div>

           </div>
                      <div className="mt-5">
                          <h1>Courses</h1>
                            <Row xs={1} md={2} className="g-4">
                           {
                               services.map(service=><HomeServce
                               key={service._id}
                                course={service}
                               ></HomeServce>
                               
                               )
                           }
    
                                 </Row>
                                          </div>
             </div>
    );
};

export default Home;