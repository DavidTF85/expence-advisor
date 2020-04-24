import React, { Component } from "react";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default function MainPageComponent(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col />
          <Col md="auto">
            <h2>Money Wizard</h2>
          </Col>
          <Col />
          <br />
          <br />
        </Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://quotefancy.com/media/wallpaper/3840x2160/1736628-Robert-T-Kiyosaki-Quote-It-s-more-important-to-grow-your-income.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 />
              <p />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s.marketwatch.com/public/resources/images/MW-HU307_richda_NS_20191030104101.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 />
              <p />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-1p4jr1b5PVJQz_EylL716MUaYvf16ZtehkpGVh5FrW3qaPkE&usqp=CAU"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 />
              <p />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <br />
        <div className="mb-2">
          <Button variant="outline-primary">
            <Link to="/register">Sing Up</Link>
          </Button>{" "}
          <Button variant="outline-primary">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </Container>

      <div />
    </div>
  );
}
