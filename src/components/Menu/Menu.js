import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MenuList from "./MenuList.js";


function Menu() {
  return (
    <section>
      <Container fluid className="home-welcome-section" id="home">
        <Container className="home-left-content">
            {
                MenuList.map((menuItem)=>{
                    return (
                        <Row>
                            <Col md={4} className="home-header" style={{ paddingBottom: 20 }}>
                            <img
                                src={menuItem.image}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                            </Col>
                            <Col md={8} className="home-header">
                            <h1 calssName="heading">
                                <span>{menuItem.name}</span>
                            </h1>
                            <p className="heading-content">
                                {menuItem.description}
                            </p>
                            </Col>
                        </Row>
                    )
                })
            }
          
            {/* <Row>
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
                    <span>Okinawa Brown Sugar Black Tea</span>
                </h1>
                <p className="heading-content">
                Okinawa milk tea is a type of milk tea that draws influence from the Okinawa region of Japan. Often compared to Hokkaido milk tea, Okinawa milk tea is a tasty blend of black tea, milk, and sweetener.
                </p>
                </Col>
            </Row>
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
                <span>House Black Tea</span>
              </h1>
              <p className="heading-content">
              House Black is a Chinese black tea blend that can be enjoyed hot or iced. It's described as brisk and flavorful with a smooth finish.  
              </p>
            </Col>
          </Row>
          
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
                <span>Green Grape Green Tea</span>
              </h1>
              <p className="heading-content">
                This elegantly flavored green tea fills the mouth with the sweet and savory aroma of the famous Japanese "Kyoho" grape. Its refreshing taste makes it ideal for iced tea.  
              </p>
            </Col>
          </Row>
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
                <span>Puff Cream Boba Choco Milk Tea</span>
              </h1>
              <p className="heading-content">
              Puff Cream Boba Choco Milk Tea is a decadent beverage combining creamy milk tea with chewy tapioca pearls, topped with a fluffy layer of whipped cream and drizzled with rich chocolate syrup, offering a delightful blend of textures and flavors in every sip.
              </p>
            </Col>
          </Row>
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
                <span>Oat Milk Matcha Latte</span>
              </h1>
              <p className="heading-content">
              Matcha has a grassy taste, perhaps a nicer way to say that is earthy. It tastes much stronger than regular green tea and has a really unique flavor, so it’s a little hard to describe. If you haven’t tried it, I recommend you just give it a go and see if you like it!
              </p>
            </Col>
          </Row> */}


        </Container>
      </Container>

      
    </section>
  );
}

export default Menu;