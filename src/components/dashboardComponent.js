import React, { Component } from "react";
//router
import { Link } from "react-router-dom";
//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//others
// import 01 from "./image/01.png"

export default function DashboardComponent(props) {
  const { onLogoutClick } = props;
  return (
    <Container>
      <br />
      <br />
      <h1>Main Menu</h1>
      <br />
      <br />
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Income</Card.Title>
          <Card.Text>
            Please let us know how your imcome or any money you get by any
            posible way... <br />
            <br />
            ....relax we will not tell to the "men" or the "tax men" or "wife"
            ;)
          </Card.Text>
          <div className="mb-1">
            <Button variant="outline-primary">
              <Link to="/Income-list">See More</Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Expenses</Card.Title>
          <Card.Text>
            Plese let us know what expenses or debts you have
          </Card.Text>
          <div className="mb-1">
            <Button variant="outline-primary">
              <Link to="/Expenses-list">See More</Link>
            </Button>
          </div>
        </Card.Body>
        <br />
        <br />
        <br />
        <br />
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>Net Worth</Card.Title>
            <Card.Text>
              here you will se what you really posses, taking out from your
              income all posible expenses
            </Card.Text>
            <div className="mb-1">
              <Button variant="outline-primary">
                <Link to="/Net-Worth-list">See More</Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        variant="primary"
        type="submit"
        onClick={event => onLogoutClick(event)}
      >
        Logout
      </Button>{" "}
    </Container>
  );
}
