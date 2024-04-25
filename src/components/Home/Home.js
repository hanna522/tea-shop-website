import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import storeImage from "../../Assets/store.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedMenuSlider from "./FeaturedMenuSlider";
import { useLanguage } from "../LanguageContext";

function Home() {
  const { translate, setLanguage } = useLanguage();

  const philosophyData = translate("home.info_phil.philosophys");
  const teaData = translate("home.info_tea.teas");

  return (
    <>
      {/** home welcome section */}
      <Container fluid className="home-welcome-section">
        <Container className="home-welcome-content">
          <Row className="home-header">
            <Col className="home-welcome-title">
              <h1>{translate("home.welcome.title")}</h1>
              <p>{translate("home.welcome.content")}</p>
            </Col>
          </Row>
          <Row className="home-header">
            <Col className="home-welcome-link">
              <a href="#about" className="btn btn-primary" label="About Us">
                {translate("home.btn_about")}
              </a>
              <Link to="/Menu" className="btn btn-primary" label="Browse Menu">
                {translate("home.btn_browse")}
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>

      {/** home info section - about philosophy*/}
      <Container fluid className="home-info-section" id="about">
        <Container className="home-info-content">
          <Row className="home-header">
            <Col>
              <h1>Our philosophy</h1>
              <ul className="home-info-grid-list">
                {philosophyData.map((item, index) => (
                  <li key={index}>
                    <img
                      src={item.img}
                      className="teas-icon"
                      alt={item.title}
                    />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      {/** home info section - about tea */}
      <Container fluid className="home-info-section">
        <Container className="home-info-content">
          <Row className="home-header">
            <Col>
              <h1>{translate("home.info_tea.title")}</h1>
              <ul className="home-info-flex-list">
                {teaData.map((item, index) => (
                  <li key={index}>
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>
              <Link to="/Leaves" className="btn btn-primary" label="More Info">
                {translate("home.btn_more")}
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>

      {/** home info section - featured menu */}
      <FeaturedMenuSlider />

      {/** home info section - location */}
      <Container fluid className="home-info-section">
        <Container className="home-info-content">
          <Row className="home-header">
            <Col>
              <h1>{translate("home.info_loca.title")}</h1>
            </Col>
          </Row>
          <Row className="home-header">
            <Col>
              <img src={storeImage} alt="Location"></img>
            </Col>
          </Row>
          <Row className="home-header">
            <Col>
              <Link to="/Location" className="btn btn-primary">
                {translate("home.btn_find")}
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
