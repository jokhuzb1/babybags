import React from "react";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
export default function NavbarSection() {
  var scroll = Scroll.animateScroll;
  return (
    <Navbar  collapseOnSelect expand="lg" className="nav bg-screen">
        <Container>
      <Nav className="nav__container__actions">
        <ul>
          <Navbar.Text
            as={Link}
            activeClass="active"
            smooth
            duration={10}
            spy
            to="about"
          >
            Главная
          </Navbar.Text>
          <Navbar.Text
            as={Link}
            activeClass="active"
            smooth
            duration={10}
            spy
            to="projects"
          >
           Товар
          </Navbar.Text>

          <Navbar.Text
            as={Link}
            activeClass="active"
            smooth
            duration={10}
            spy
            to="blog"
          >
            Доставка
          </Navbar.Text>

          <Navbar.Text
            as={Link}
            activeClass="active"
            smooth
            duration={10}
            spy
            to="contact"
          >
            Контакты
          </Navbar.Text>
        </ul>
      </Nav>
      </Container>
    </Navbar>
  );
}
