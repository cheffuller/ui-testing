import Container from 'react-bootstrap/Container';
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Form,
} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand='lg' className='navbar-custom'>
      <Container>
        <Navbar.Brand href='#home' className='navbar-brand'>
          GlobeTrotter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form>
              <Row>
                <Col xs='auto'>
                  <Form.Control
                    type='text'
                    placeholder='Search'
                    className=' mr-sm-2'
                  />
                </Col>
                <Col xs='auto'>
                  <Button className='search' type='submit'>Search</Button>
                </Col>
              </Row>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
