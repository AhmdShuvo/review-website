import Button from '@restart/ui/esm/Button';
import React from 'react';


const BestCourse = (props) => {
    const {about,name,price,picture}=props.course;
    return (

        // Single Product //
        <div className="img-fluid d-md-flex m-5 border border-2 border-primary p-3">
          <img className="w-30 m-3" src={picture}/>
          <div>
              <h5>{name}</h5>
              <p>{about}</p>
              <h6> Price : $ {price}</h6>
              <Button className="btn btn-primary">Add to cart </Button>
          </div>
        </div>
    );
};

export default BestCourse;