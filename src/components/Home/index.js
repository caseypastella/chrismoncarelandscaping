import React from 'react';
import {withAuthorization} from '../Session';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Carousel, CarouselItem, Image, Figure, Caption, Card, ListGroup, Modal
} from 'react-bootstrap'; 
import './home.css';
import {LinkContainer} from 'react-router-bootstrap';


const carouselStyle = {
  height: '400px',
  width: 'auto'
};
const carouselItem = {
  height: '400px',
  width: 'auto'
}
const HomePage = () => (
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
          <h1>Free Estimates When you Sign up Today!</h1>
          <p>Contact Chrismon Care Landscaping Today for all your Landscaping needs</p>

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
          <h3>Landscape maintenance and remodeling, no job is to big for us!</h3>
          <p>Call us Today!</p>

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
                Hardscaping services designed to your needs and specifications!
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
              <Card.Title>Mulch and Bed Remodeling</Card.Title>
              <Card.Text>
                Chrismon Care will bring your dream flower bed to life with bed remodeling and design!
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
              <Card.Title>Lawncare and Pruning</Card.Title>
              <Card.Text>
                From seeding to aroeating and pruning maintenance we can give your yard a brand new look!
              </Card.Text>
            <LinkContainer to="/about">
            <Button variant="primary"> Go somewhere</Button>
            </LinkContainer>
            </Card.Body>
            </Card>
           </Col>
          
         
             
           
        </Row>
      </Container>

      <Navbar sticky="bottom" bg="dark" variant="dark" style={{minWidth: 1000, height: 40}}>
      <LinkContainer to = '/home'> 
      <NavbarBrand href="#home">
      Chrismon Care Landscaping
      </NavbarBrand>
      </LinkContainer>
      </Navbar>
     
      </div>

);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
