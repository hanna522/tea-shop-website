import React, { useState, useEffect } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../LanguageContext";

const MyMapComponent = ({ center, zoom }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  useEffect(() => {
    if (ref.current && !map) {
      // map instance
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom: 14,
        mapId: "TEA_ALLEY_MAP",
      });
      setMap(newMap);

      // marker instance
      new window.google.maps.Marker({
        position: center,
        map: newMap,
        title: "Tea-Alley",
      });
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} style={{ width: "400px", height: "400px" }} />;
};

export default function Location() {
  const center = { lat: 37.335594177246094, lng: -121.88988494873047 };

  const { translate, setLanguage } = useLanguage();

  return (
    <>
      <Container fluid className="location-info-section">
        <Container className="location-info-content">
          <Row className="home-header">
            <h1>{translate("location.title")}</h1>
            <Col className="flex-middle" md={7}>
              <Wrapper apiKey={process.env.REACT_APP_API_KEY}>
                <MyMapComponent center={center} />
              </Wrapper>
            </Col>
            <Col className="flex-middle-mobile" md={5}>
              <h2>Tea Alley - San Jose</h2>
              <section>
                <h3>{translate("location.address.title")}</h3>
                <p>40 S 1st st</p>
                <p>San Jose, CA 95113</p>
              </section>
              <section>
                <h3>{translate("location.open_hours.title")}</h3>
                <p>
                  <b>Tue-Sat</b> 8:00 PM - 2:00 AM
                </p>
                <p>
                  <b>Mon, Sun</b> 8:30 PM - 2:00 AM
                </p>
              </section>
              <section>
                <h3>{translate("location.contact.title")}</h3>
                <p>(408) 217-9486</p>
              </section>
              <a
                href="https://www.google.com/maps/place/Tea+Alley/@37.3354412,-121.9001288,15z/data=!3m1!4b1!4m6!3m5!1s0x808fccbcba0cb9cd:0xe23d688e9fc46d50!8m2!3d37.3354416!4d-121.8898505!16s%2Fg%2F11f4qmwmrg?entry=ttu"
                rel="direction"
                className="location-button"
              >
                {translate("location.btn_direction")}
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
