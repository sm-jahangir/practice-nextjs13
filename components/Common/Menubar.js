import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menubar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} href='/'>
          CodersGift
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} href='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href='/user'>
              User List
            </Nav.Link>
            <Nav.Link as={Link} href='/blogs'>
              Blogs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
