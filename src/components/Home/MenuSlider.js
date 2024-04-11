import Slider from 'react-slick';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import menus from "../Menu/MenuList";

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

function MenuSlider() {

    return (
        <section>
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
                        <Link to="/menu" className="btn btn-primary">Browse our Menu</Link>
                    </Col>
                </Row>
                </Container>
            </Container>
        </section>
    )
}

export default MenuSlider;