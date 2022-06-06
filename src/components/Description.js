import React from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
const Description = ({ movie }) => {
  const params = useParams();
  // console.log(params)
  const moviz = movie.find((el) => Number(el.id) === Number(params.id));
  // console.log(moviz)
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={moviz.imgsrc} />
        <Card.Body>
          <Card.Title>{moviz.title}</Card.Title>
          <Card.Text>{moviz.description}</Card.Text>
          <Card.Text>
            <Rating ratingValue={moviz.rating} readonly={true} />
          </Card.Text>
          <Link to={`/`}>
            <button variant="primary">description</button>
          </Link>
        </Card.Body>
      </Card>
      <iframe
          width="420"
          height="315"
          src={moviz.trailer}
        ></iframe>
    </div>
  );
};

export default Description;
