import React from 'react';
import {Button,Col,Container,Form,FormControl,Nav,Navbar,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../FakeData/Images/Logo.png'
import './Booking.css'
const Booking = () => {
    return (
        <div>
            <div className="backgroundCover">
                <div className="container">
                <Navbar collapseOnSelect="collapseOnSelect" expand="lg" variant="dark">
                    <Link to="/home"><Navbar.Brand href="#home"><img className="logoSize" src={logo} fluid="fluid" alt=""/></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Form inline="inline">
                                <FormControl type="text" placeholder={`Search Here`} className="mr-sm-2 Search"/>
                                </Form>

                        </Nav>
                        <Nav>
                            <Nav.Link className="navbar" href="#news">News</Nav.Link>
                            <Nav.Link className="navbar" href="#destination">Destination</Nav.Link>
                            <Nav.Link className="navbar" href="#blog">Blog</Nav.Link>
                            <Nav.Link className="navbar" href="#contact">Contact</Nav.Link>
                            <Link to="/login"><Button className="logIn" variant="warning">Log In</Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                    <Container>
                        <Row>
                            <Col>
                                <div className='coxBazarArea'>
                                    <h1>COX'S BAZAR</h1>
                                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>

                                </div>
                            </Col>
                            <Col>
                                <div className="bookingArea">
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">

                                            <Form.Control type="text" placeholder="Origin"/>

                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">

                                            <Form.Control type="text" placeholder="Destination"/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <p>From</p>
                                            <input type="date" name="" id=""/>
                                            <p>To</p>
                                            <input type="date" name="" id=""/>
                                        </Form.Group>
                                        <Link to="/hotel">
                                            <Button variant="warning" type="submit">
                                                Start Booking
                                            </Button>
                                        </Link>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </div>
    );
};

export default Booking;