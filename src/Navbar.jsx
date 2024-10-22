import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-black navbar-dark"> 
        <Container> 
          <Navbar.Brand href="#" className="text-white text-[2rem] font-bold">SocialApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#feed" className="text-white">Feed</Nav.Link>
              <Nav.Link href="#messages" className="text-white">Messages</Nav.Link>
              <NavDropdown title="Profile" id="navbarScrollingDropdown" className="text-white">
                <NavDropdown.Item href="#viewProfile">View Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
