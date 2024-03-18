import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import menu1 from '../../Assets/menu/menu1.png';
import menu2 from '../../Assets/menu/menu2.png';
import menu3 from '../../Assets/menu/menu3.png';
import menu4 from '../../Assets/menu/menu4.png';
import menu5 from '../../Assets/menu/menu5.png';

function Home2() {
  const menuItems = [
    { img: menu1, name: "Green Boba Tea" }, 
    { img: menu2, name: "Iced Americano" }, 
    { img: menu3, name: "Grape Tea" }, 
    { img: menu4, name: "Cream Milk Tea" }, 
    { img: menu5, name: "Advanced Tea" }
  ];

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
    <Container className="home-info-section">
      <Row>
        <Col md={12} className="home-middle-content">
          <h1 className="heading">
            This is our <span className="purple"> Featured Menu </span>
          </h1>
          <h2 className="heading-name">
            This is h2 for featured menu
          </h2>
          <Slider className="slider" {...settings}>
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.img} alt={`menu${index + 1}`} />
                <p>{item.name}</p>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Link to="/" className="btn btn-primary">Browse our Menu</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Home2;
