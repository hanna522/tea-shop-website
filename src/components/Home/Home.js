import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MenuSlider from "./MenuSlider.js";
import GoogleReview from "./GoogleReview.js";


function Home() {
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
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-list">
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

      <MenuSlider />  
      <GoogleReview />
      
    </section>
  );
}

export default Home;