import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

function GoogleReview() {
  const [reviews, setReviews] = useState([]);
  const YOUR_API_KEY = ''
  useEffect(() => {

    axios.get(`http://cors-anywhere.herokuapp.com/http://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJzbkMurzMj4ARUG3En45oPeI&fields=name,rating,reviews&key=${YOUR_API_KEY}`)
    .then(function (response) {
      if(response.data && response.data.result && response.data.result.reviews) {
        setReviews(response.data.result.reviews);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <Container fluid className="home-info-section" id="home">
      <Container className="home-middle-content">
        <Row>
          <Col md={12} className="header">
            <h1 className="heading">
              Reviews
            </h1>
            <h2 className="heading-name">
              Feel free to <span className="purple">connect </span>with me
            </h2>
          </Col>
        </Row>
        <Row>
          {reviews.map((review, index) => (
            <div key={index}>
              <p>{review.author_name}: {review.rating} stars</p>
              <p>{review.text}</p>
            </div>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default GoogleReview;
