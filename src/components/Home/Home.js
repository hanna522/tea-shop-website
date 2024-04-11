import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeMainImage from "../../Assets/home-main.png";
import productImage from "../../Assets/home-product.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedMenuSlider from "./FeaturedMenuSlider";
import ContentSection from "../ContentSection";

function Home() {
  const philosophys = [{title: "Various Teas", content: "With a deep understanding of the characteristics", img: homeMainImage},
    {title: "Various Teas", content: "With a deep understanding of the characteristics", img: homeMainImage},
    {title: "Various Teas", content: "With a deep understanding of the characteristics", img: homeMainImage},
    {title: "Various Teas", content: "With a deep understanding of the characteristics", img: homeMainImage}];
  
    const teas = [{title: "Green Tea", content: "This is a good green tea", img: homeMainImage},
    {title: "Green Tea", content: "This is a good green tea", img: homeMainImage},
    {title: "Green Tea", content: "This is a good green tea", img: homeMainImage}];

  return (
    <>
    {/* home welcome section */}
    <Container fluid className="home-welcome-section">
      <Container className="home-welcome-content">
        <Row className="home-header">
          <Col className="home-welcome-link">
            <Link to="/Home" className="btn btn-primary" label="About Us">About Us</Link>
            <Link to="/Menu" className="btn btn-primary" label="Browse Menu">Browse Menu</Link>      
          </Col>
        </Row>
      </Container>
    </Container>

    {/* home info section - about philosophy*/}
    <Container fluid className="home-info-section">
      <Container className="home-info-content">
        <Row className="home-header">
          <Col>
            <h1>Our philosophy</h1>
            <ul className="home-info-grid-list">
              {philosophys.map((item, index) => (
                <li key={index}>
                  <img src={item.img} alt={item.title} />
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

    {/* home info section - about tea */}
    <Container fluid className="home-info-section">
      <Container className="home-info-content">
        <Row className="home-header">
          <Col>
            <h1>Enjoy Taiwanese Tea-based Drink</h1>
            <p>Characterized by milk tea with its signature tapioca pearls or jellies, this beverage offers a unique blend of flavors and textures</p>
            <ul className="home-info-flex-list">
              {teas.map((item, index) => (
                <li key={index}>
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>  
          </Col>
        </Row>
      </Container>
    </Container>

    {/* home info section - featured menu*/}
    <FeaturedMenuSlider />

    {/* home info section - location*/}
    <Container fluid className="home-info-section">
      <Container className="home-info-content">
        <Row className="home-header">
          <Col>
            <h1>Find a Store Near You</h1>
          </Col>
        </Row>
        <Row className="home-header">
          <Col md={7}>
            <img src={homeMainImage} alt="Location" width="500px"></img>
          </Col>
          <Col md={5}>
            <h5>Contact</h5>
            <p>Tel: 415-622-9994</p>
            <h5>Location</h5>
            <p>1222 Harrison st, San Jose, CA</p>
            <Link to="/Location" className="btn btn-primary" label="More Info">More Info</Link>      
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Home;
