import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const Add = ({ handleadd }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setform] = useState({
    title: "",
    imgsrc: "",
  });
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    handleadd({ ...form, done: false, rating: rating });
    setform({
      title: "",
      imgsrc: "",
    });
    handleClose();
  };
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handlesubmit}
            style={{
              backgroundColor: "blueviolet",
              padding: "1px 2px",
              margin: "8px 0",
            }}
          >
            <label>title</label>
            <input type="text" onChange={handlechange} name="title" required />
            <label>image</label>
            <input type="url" onChange={handlechange} name="imgsrc" required />
            <label>rating</label>
            <Rating
              onClick={handleRating}
              ratingValue={rating} /* Available Props */
            />
            <button>submit</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
