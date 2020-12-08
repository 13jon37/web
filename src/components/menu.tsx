import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar } from "react-bootstrap"

const Menu = () => (
  <Navbar expand="lg" variant="dark">
  <Navbar.Brand href="/">Jon Locklear</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/reallife">Irl</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Menu
