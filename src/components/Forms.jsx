import { React } from "react";
import {Container,Row,Col } from "react-bootstrap";
import "../styles/style.css";

const Forms = () => {
  return (
    <div>
        <Container className="imageHeader" fluid>
            <Row>
                <Col>
                <form className = "notify-form">
                    <label>
                        <input className = "notify-section" type="text" name="name" placeholder="example@email.com" />
                    </label>
                    <input className = "notify-button" type="submit" value="Notify Me" />
                </form>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Forms;