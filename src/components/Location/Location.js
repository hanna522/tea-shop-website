import React, { useState, useEffect } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyMapComponent = ({ center, zoom }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  useEffect(() => {
    if (ref.current && !map) {
      // map instance
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
      setMap(newMap);

      // merker instance
      new window.google.maps.Marker({
        position: center,
        map: newMap,
        title: "Tea-Alley",
      });
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} style={{ width: "400px", height: "400px" }} />;
};

export default function GoogleMap() {
  const API_KEY = "";
  const center = { lat: 37.335594177246094, lng: -121.88988494873047 };
  const zoom = 14;

  return (
    <section>
      <Container className="left-content">
        <Row>
          <h1>Location</h1>
          <Col md={7}>
            <Wrapper apiKey={API_KEY}>
            <MyMapComponent center={center} zoom={zoom} />
            </Wrapper>
          </Col>
          <Col md={5}>
            <h2>Tea Alley - San Jose</h2>
            <p>40 S 1st st</p>
            <p>San Jose, CA 95113</p>
            <p>Downtown</p>
            <a
            href="https://www.google.com/maps/place/Tea+Alley/@37.3354412,-121.9001288,15z/data=!3m1!4b1!4m6!3m5!1s0x808fccbcba0cb9cd:0xe23d688e9fc46d50!8m2!3d37.3354416!4d-121.8898505!16s%2Fg%2F11f4qmwmrg?entry=ttu"
            role="button"
            rel="direction"
            style={{
                display: "inline-block",
                backgroundColor: "red", // Example button color
                color: "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
            >
            Get Direction
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
