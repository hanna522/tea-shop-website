import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import menus from "../Menu/MenuList"

function Home() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <Container fluid className="home-welcome-section" id="home">
        <Container className="home-left-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 calssName="heading">
                Welcome to <span className="purple">TEA Alley</span>
              </h1>
              <h2 className="heading-name">
                This is for the welcome message h2
              </h2>
              <p className="heading-content">
                This is for the welcome message content. This is for the welcome message content. This is for the welcome message content. This is for the welcome message content. This is for the welcome message content. This is for the welcome message content. 
              </p>
            </Col>
            <Col md={4} className="home-header" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-info-section" id="home">
        <Container className="home-right-content">
          <Row>
            <Col md={4} className="home-header" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={8} className="home-header">
              <h1 calssName="heading">
                This is our <span className="purple">Vision</span>
              </h1>
              <h2 className="heading-name">
                This is for the vision h2
              </h2>
              <p className="heading-content">
                This is the vision content.This is the vision content. This is the vision content. This is the vision content. This is the vision content. This is the vision content. This is the vision content.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-info-section" id="home">
        <Container className="home-middle-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 className="heading">
               The Art of Tea <span className="purple">BLENDING</span>
              </h1>
              <h2 className="heading-name">
                This is the blending information h2
              </h2>
              <p className="heading-content">
                This is for the blending information content. This is for the blending information content. This is for the blending information content. This is for the blending information content. This is for the blending information content. This is for the blending information content.
              </p>

              <ul class="info-list">
                <li class="info-list-content">
                  <div class="Img">
                    <a  title="Various Teas"><img src={homeLogo} alt="Various Teas"/></a>
                  </div>
                  <div class="Txt">
                    <h3><a  title="Various Teas"><b>V</b>arious Teas</a></h3>
                    <p>With a deep understanding of the characteristics</p>
                  </div>
                </li>
                <li class="info-list-content">
                  <div class="Img">
                    <a  title="Various Teas"><img src={homeLogo} alt="Various Teas"/></a>
                  </div>
                  <div class="Txt">
                    <h3><a  title="Various Teas"><b>V</b>arious Teas</a></h3>
                    <p>With a deep understanding of the characteristics</p>
                  </div>
                </li>
                <li class="info-list-content">
                  <div class="Img">
                    <a  title="Various Teas"><img src={homeLogo} alt="Various Teas"/></a>
                  </div>
                  <div class="Txt">
                    <h3><a  title="Various Teas"><b>V</b>arious Teas</a></h3>
                    <p>With a deep understanding of the characteristics</p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-info-section" id="home">
        <Container className="home-middle-content">
          <Row>
            <Col md={12} className="header">
              <h1 className="heading">
                This is our <span className="purple"> Featured Menu </span>
              </h1>
              <h2 className="heading-name">
                This is h2 for featured menu
              </h2>
            </Col>
            <Col md={12} className="header">
              <Slider className="slider" {...settings}>
                {menus.map((menu, index) => (
                  <div key={index} className="menu-item">
                    <img src={menu.image} alt={menu.name} />
                    <p>{menu.name}</p>
                  </div>
                ))}
              </Slider>
            </Col>
            <Col md={12} className="header">
            <Link to="/" className="btn btn-primary">Browse our Menu</Link>
          </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-info-section" id="home">
        <Container className="home-middle-content">
          <Row>
            <Col md={12} className="header">
              <h1 className="heading">
                FIND ME ON
              </h1>
              <h2 className="heading-name">
                Feel free to <span className="purple">connect </span>with me
              </h2>
              <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Home;