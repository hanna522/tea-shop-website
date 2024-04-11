import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import storeImage from "../../Assets/store.png"
import teaImage from "../../Assets/home-tea.png"
import snackImage from "../../Assets/home-snack.png"
import toppingImage from "../../Assets/home-topping.png"
import freshImage from "../../Assets/home-fresh.png"
import healthyImage from "../../Assets/home-healthy.png"
import handcraftedImage from "../../Assets/home-handcrafted.png"
import authenticImage from "../../Assets/home-authentic.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedMenuSlider from "./FeaturedMenuSlider"

function Home() {
  const philosophys = [{title: "Fresh Ingredients", content: "We pride ourselves on using fresh, high-quality ingredients", img: freshImage},
    {title: "Healthy & Worry-free", content: "Our drinks and dishes are made healthy and worry-free", img: healthyImage},
    {title: "Handcrafted Brewed Tea", content: "Experience the freshness of our handcrafted, freshly-brewed tea", img: handcraftedImage},
    {title: "Authentic Flavor of Taiwan", content: "Our dishes offer the authentic, time-honored taste of Taiwan", img: authenticImage}];
  
    const teas = [{title: "Various Tea Base", content: "Choose a various type of fresh tea for your drink", img: teaImage},
    {title: "Chewy Toppings", content: "Signature tapioca pearls or jellies makes your drink enjoyable", img: toppingImage},
    {title: "Snacks", content: "Find Taiwanese traditional snacks that fits your drink", img: snackImage}];

  return (
    <>
    {/* home welcome section */}
    <Container fluid className="home-welcome-section">
      <Container className="home-welcome-content">
        <Row className="home-header">
          <Col md={12} className="home-welcome-title">
            <h1>TEA ALLEY</h1>
            <p>Bubble Tea</p>
          </Col>
        </Row>
        <Row className="home-header">
          <Col md={12} className="home-welcome-link">
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
                  <img src={item.img} className="teas-icon" alt={item.title} />
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
          <Col>
            <img src={storeImage} alt="Location" width="500px"></img>
          </Col>
        </Row>        
        <Row className="home-header">
          <Col>
            <Link to="/Location" className="btn btn-primary">Find Store</Link>      
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Home;
