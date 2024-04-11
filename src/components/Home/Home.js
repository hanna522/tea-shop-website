import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeMainImage from "../../Assets/home-main.png"; // More descriptive
import productImage from "../../Assets/home-product.png"; // More descriptive
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedMenuSlider from "./FeaturedMenuSlider"; // Specifies the type of menu being slid
import GoogleReview from "./GoogleReview"; // More descriptive
import HeaderSection from "../HeaderSection";
import ContentSection from "../ContentSection";

function Home() {
  return (
    <>
    <HeaderSection
      title="Find Your Drink in TEA Alley" 
      subtitle="Explore our wide range of sweet and refreshing flavors to find your little piece of happiness."
    >
      <div className="home-welcome-link">
        <Link to="/Home" className="btn btn-primary" label="About Us">About Us</Link>
        <Link to="/Menu" className="btn btn-primary" label="Browse Menu">Browse Menu</Link>
      </div>
    </HeaderSection>

    <ContentSection
      title="Taiwanese tea-based drink"
      subtitle="Characterized by milk tea with its signature tapioca pearls or jellies, this beverage offers a unique blend of flavors and textures."
    >
      <Col md={4} className="home-header" style={{ paddingBottom: 20 }}>
        <img
          src={productImage}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "250px" }}
        />
      </Col>
    </ContentSection>

    <ContentSection
      title="The Art of Tea BLENDING"
      subtitle="Enjoy the drink with various kind of tea base"
    >
      <Row>
        <Col md={12} className="home-list">
          <ul class="info-list">
          <li class="info-list-content">
            <div class="Img">
              <a  title="Various Teas"><img src={homeMainImage} alt="Various Teas"/></a>
            </div>
            <div class="Txt">
              <h3><a  title="Various Teas"><b>V</b>arious Teas</a></h3>
              <p>With a deep understanding of the characteristics</p>
            </div>
          </li>
          <li class="info-list-content">
            <div class="Img">
              <a  title="Various Teas"><img src={homeMainImage} alt="Various Teas"/></a>
            </div>
            <div class="Txt">
              <h3><a  title="Various Teas"><b>V</b>arious Teas</a></h3>
              <p>With a deep understanding of the characteristics</p>
            </div>
          </li>
          <li class="info-list-content">
            <div class="Img">
              <a  title="Various Teas"><img src={homeMainImage} alt="Various Teas"/></a>
            </div>
            <div class="Txt">
              <h3><a  title="Various Teas"><b>V</b>arious Teas</a></h3>
              <p>With a deep understanding of the characteristics</p>
            </div>
          </li>
        </ul>           
        </Col>
      </Row>

    </ContentSection>

    <FeaturedMenuSlider />  
    <GoogleReview />
    </>
  );
}

export default Home;
