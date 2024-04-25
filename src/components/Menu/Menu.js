import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuList from "./MenuList.js";
import { useLanguage } from "../LanguageContext";

function Menu() {
  const { translate, setLanguage } = useLanguage();

  const featuredMenu = translate("menu.featured_menu");
  const milkTea = translate("menu.milk_tea");
  const fruitTea = translate("menu.fruit_tea");
  const snack = translate("menu.snack");
  return (
    <section>
      <Container fluid className="menu-info-section" id="home">
        <Container className="menu-info-content">
          <h1>{translate("menu.title")}</h1>

          {/** Featured Menu */}
          <h2>Featured Menu</h2>
          {featuredMenu.map((menuItem, index) => {
            return (
              <Row key={menuItem.id || menuItem.name || index}>
                <Col
                  md={4}
                  className="home-header"
                  style={{ paddingBottom: 20 }}
                >
                  <img
                    src={menuItem.image}
                    alt="home pic"
                    className="img-fluid"
                  />
                </Col>
                <Col md={8} className="home-header menu-info-text">
                  <h3 className="heading">
                    <span>{menuItem.name}</span>
                  </h3>
                  <p className="heading-content">{menuItem.description}</p>
                  <p className="nutrition">
                    {menuItem.nutrition ? menuItem.nutrition : null}
                  </p>
                </Col>
              </Row>
            );
          })}

          {/** Milk Tea */}
          <h2>Milk Tea</h2>
          {milkTea.map((menuItem, index) => {
            return (
              <Row key={menuItem.id || menuItem.name || index}>
                <Col
                  md={4}
                  className="home-header"
                  style={{ paddingBottom: 20 }}
                >
                  <img
                    src={menuItem.image}
                    alt="home pic"
                    className="img-fluid"
                  />
                </Col>
                <Col md={8} className="home-header menu-info-text">
                  <h3 className="heading">
                    <span>{menuItem.name}</span>
                  </h3>
                  <p className="heading-content">{menuItem.description}</p>
                  <p className="nutrition">
                    {menuItem.nutrition ? menuItem.nutrition : null}
                  </p>
                </Col>
              </Row>
            );
          })}

          {/** Fruit Tea */}
          <h2>Fruit Tea</h2>
          {fruitTea.map((menuItem, index) => {
            return (
              <Row key={menuItem.id || menuItem.name || index}>
                <Col
                  md={4}
                  className="home-header"
                  style={{ paddingBottom: 20 }}
                >
                  <img
                    src={menuItem.image}
                    alt="home pic"
                    className="img-fluid"
                  />
                </Col>
                <Col md={8} className="home-header menu-info-text">
                  <h3 className="heading">
                    <span>{menuItem.name}</span>
                  </h3>
                  <p className="heading-content">{menuItem.description}</p>
                  <p className="nutrition">
                    {menuItem.nutrition ? menuItem.nutrition : null}
                  </p>
                </Col>
              </Row>
            );
          })}

          {/** Snack */}
          <h2>Snack</h2>
          {snack.map((menuItem, index) => {
            return (
              <Row key={menuItem.id || menuItem.name || index}>
                <Col
                  md={4}
                  className="home-header"
                  style={{ paddingBottom: 20 }}
                >
                  <img
                    src={menuItem.image}
                    alt="home pic"
                    className="img-fluid"
                  />
                </Col>
                <Col md={8} className="home-header">
                  <h3 className="heading">
                    <span>{menuItem.name}</span>
                  </h3>
                  <p className="heading-content">{menuItem.description}</p>
                  <p className="nutrition">
                    {menuItem.nutrition ? menuItem.nutrition : null}
                  </p>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Container>
    </section>
  );
}

export default Menu;
