import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import leafPic from '../../Assets/leaf.jpeg';
import {useLanguage} from "../LanguageContext";

export default function Leaves() {
	const { translate, setLanguage } = useLanguage();
	return (
		<>
			<Container fluid className="location-info-section">
				<Container className="location-info-content">
					<Row className="home-header">
						<h1>{translate("leaves.subtitle")}</h1>
						<Col md={6}>
							<section>
								<p>{translate("leaves.intro1")}</p>
							</section>
							<section>
								<p>{translate("leaves.intro2")}</p>
							</section>
						</Col>
						<Col md={6}>
							<img
								src={leafPic}
								alt="home pic"
								className="img-fluid"
								style={{maxHeight: "450px"}}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}
