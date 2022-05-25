import React from 'react'
import {Card} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
const MovieCard = ({el}) => {
   
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.imgsrc} />
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
       {el.description}
      </Card.Text>
      <Card.Text>
      <Rating ratingValue={el.rating} readonly={true} /* Available Props */ />
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
export default MovieCard
