import { React } from "react";
import {Container,Row,Col } from "react-bootstrap";
import "../styles/style.css";

const Forms = () => {
  return (
    <div>
        <Container className="secondarySec" fluid>
            <Row>
                <Col>
                <form className = "notify-form">
                    <label>
                        <input className = "notify-section" type="text" name="name" placeholder="sample@email.com" />
                    </label>
                    <input className = "notify-button" type="submit" value="notify next drop" />
                </form>
                </Col>
            </Row>
            <Row className="Links">
                <Col>
                <a className="linkIndv" href="link success">collection</a>
                </Col>
                <p></p>
                <Col>
                <a className="linkIndv" href="link success">app</a>
                </Col>
                <p></p>
                <Col>
                <a className="linkIndv" href="link success">store</a>
                </Col>
                <p></p>
                <Col>
                <a className="linkIndv" href="link success">contact</a>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Forms;