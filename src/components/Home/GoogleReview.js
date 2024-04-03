import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from 'react';

const GOOGLE_API_KEY = 'YOUR_API_KEY'; // Place your API key here
const PLACE_ID = 'YOUR_PLACE_ID'; // Place the ID of the location

function GoogleReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      })
      .catch(error => {
        console.error('Error fetching Google Reviews:', error);
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
    )
    }

export default GoogleReview