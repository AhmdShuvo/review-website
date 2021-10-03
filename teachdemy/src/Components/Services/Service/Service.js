import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    
    const {about,name,price,teacher,picture,_id}=props.service;
    return (
        
            <Col className="mt-5" >
      <Card className="shadow-lg p-3 mb-5 bg-body rounded">
        <Card.Img  className="p-3 border"variant="top" src={picture}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <small className="text-warning fs-6 mt-5 mb-5 "> By :{teacher}</small>
          
          <Card.Text>
            {about}
          </Card.Text>
          <Card.Title> price : $ {price}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
        
    );
};

export default Service;