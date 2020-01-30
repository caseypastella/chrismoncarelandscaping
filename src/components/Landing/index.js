import React from 'react';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Carousel, CarouselItem, Image, Figure, Caption, Card
} from 'react-bootstrap'; 
import {LinkContainer} from 'react-router-bootstrap';

const Landing = () => (
  <div>
    
     <Jumbotron fluid className="mb-0">
      <Container className = "text-center">
        <h1 className = "display-4">Chrismon Care Landscaping</h1>
      </Container>
    </Jumbotron>
      <Carousel className="mt-0"> 
        <Carousel.Item>
          <img
          className="img-responsive center-block"
          width={1900}
          height={650}
          src = {process.env.PUBLIC_URL + '/jpeg-3.jpg'}
          alt="First Slide"
          preserveAspectRatio="xMidYMid slice"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>

        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="img-responsive center-block"
          width={2000}
          height={650}
          src = {process.env.PUBLIC_URL + '/jpeg-2.jpg'}
          alt="First Slide"
          preserveAspectRatio="xMidYMid slice"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>

        </Carousel.Caption>
      

        </Carousel.Item>
      </Carousel>

      <Container className = "mt-5">
        <Row>
          <Col lg={4}>
            <Card className = "card1">
              <Card.Img variant="top"
                src = {process.env.PUBLIC_URL + '/jpeg-10.jpg'}
                roundedCircle
                />
                <Card.Body>
                  <Card.Title>Hardscapes</Card.Title>
                    <Card.Text>
                    Hardscaping services designed to your needs and specifications
                    </Card.Text>
                      <Button variant="primary"> Go somewhere</Button>
                </Card.Body>
              </Card>
          </Col>
          <Col lg={4}>
            <Card className = "card2">
              <Card.Img variant="top"
                src = {process.env.PUBLIC_URL + '/jpeg-10.jpg'}
                roundedCircle
                />
                  <Card.Body>
                    <Card.Title>Hardscapes</Card.Title>
                      <Card.Text>
                      Hardscaping services designed to your needs and specifications
                      </Card.Text>
                        <LinkContainer to= "/account">
                        <Button variant="primary"> Go somewhere</Button>
                        </LinkContainer>
                    </Card.Body>
              </Card>
        </Col>
      <Col lg={4}>
        <Card className = "card3">
          <Card.Img variant="top"
            src = {process.env.PUBLIC_URL + '/jpeg-10.jpg'}
            roundedCircle
            />
              <Card.Body>
                <Card.Title>Hardscapes</Card.Title>
                  <Card.Text>
                    Hardscaping services designed to your needs and specifications
                  </Card.Text>
                    <LinkContainer to="/about">
                    <Button variant="primary"> Go somewhere</Button>
                    </LinkContainer>
              </Card.Body>
          </Card>
        </Col> 
    </Row>
</Container>
</div>
  
);

export default Landing;
