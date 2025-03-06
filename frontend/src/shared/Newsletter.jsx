import React from "react";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>
                Stay informed with expert insights, travel inspiration, and
                special offers to make your journeys unforgettable. Subscribe
                now to receive exclusive travel tips, destination guides, and
                the best deals straight to your inbox!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
