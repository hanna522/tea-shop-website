import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
      <Container fluid className="home-about-section" id="home">
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

      <Home2 />
      <Container>
      <Row className="home-info-section">
          <Col md={12} className="home-middle-content">
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
    </section>
  );
}

export default Home;