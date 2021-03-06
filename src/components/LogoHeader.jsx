import { React } from "react";
import { Image, Container,Row,Col } from "react-bootstrap";
import logo from "../assets/Logo1.svg";
import load from "../assets/Load.png";

import "../styles/style.css";

const LogoHeader = () => {
  return (
    <div>
        <Container className="imageHeader" fluid>
            <Row>
                <Col>
                <Image className = "imageLogo" src={logo}/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Image className = "loading" src={load}/>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default LogoHeader;