import React from 'react';
import { Card, Col } from 'react-bootstrap';


const HomeServce = (props) => {
    const {about,name,price,teacher,picture,_id}=props.course;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <small className="text-warning fs-6">By : {teacher}</small>
            <Card.Text>
             {about}
            </Card.Text>
            <h5>Price :${price} </h5>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default HomeServce;