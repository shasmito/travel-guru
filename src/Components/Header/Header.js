import React, {useState} from 'react';
import './Header.css';
import logo from '../../FakeData/Images/Logo.png'
import {Button,Col,Container,Form,FormControl,Nav,Navbar,Row} from 'react-bootstrap';

import FakeData from '../../FakeData/FakeData'
import Home from '../Home/Home';
import { Link } from 'react-router-dom';

const Header = () => {
    const [fakeData, setFakeData] = useState(FakeData);
    return (
        <div className=" backgroundCover">
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
                        <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.</p>
                        <Link to="/booking"><Button className="logIn" variant="warning">Booking →</Button></Link>
                        </div>
                        </Col>
                    <Col>
                        <Home/>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Header;