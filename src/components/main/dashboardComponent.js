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

      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">INCOME</h5>
              <p class="card-text">
                Please let us know how your imcome or any money you get by any
                posible way... <br />
                <br />
                ....relax we will not tell to the "men" or the "tax men" or
                "wife" ;)
              </p>
              <a href="/Income-list" class="btn btn-primary">
                Go to income
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Expenses</h5>
              <p class="card-text">
                Plese let us know what expenses or debts you have
              </p>
              <a href="#" class="btn btn-primary">
                Go to expenses
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">money alkimia</h5>
            <p class="card-text">from pennies to the philosofal stone</p>
            <a href="#" class="btn btn-primary">
              be a wizard
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">hawards </h5>
            <p class="card-text">here you will learn by the best teachers!</p>
            <a href="#" class="btn btn-primary">
              Go to 2 3/4
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
