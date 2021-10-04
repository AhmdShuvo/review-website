import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeServce from './HomeServce';

const Home = () => {
            //  useState//
    const [services,setservices]=useState([])
        // fetch data //
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


         {/* Bonus part  */}
      <h1>Why Teachdemy </h1>

<div className=" container d-md-flex"> 
   <div className="m-5">
       <img src="./image/download.jfif" alt="" />

       <center><h3>complete Certification</h3></center>
   </div>
   <div  className="m-5">

       <img  src="./image/images (1).jfif" alt="" />
       <center><h3>Quality Lectures </h3></center>
   </div>
   <div>

       <img src="./image/images.jfif" alt="" />
      <center> <h3>Better Learning Environmen</h3></center>
   </div>
             
</div>
                  
                  {/* Showing 4 coourses  */}

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