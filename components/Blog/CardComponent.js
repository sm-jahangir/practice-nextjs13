import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const CardComponent = ({ post }) => {
  const { id, title, body } = post;
  return (
    <Col>
      <Card>
        <Card.Img variant='top' src='https://via.placeholder.com/350x250' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
