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
            <Card.Text>
             {about}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default HomeServce;