import React from 'react';
import {Button,Col,Container,Nav,Navbar,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../FakeData/Images/Logo1.png';
import './Hotel.css';
import Room1 from '../../FakeData/Images/Rectangle26.png';
import Room2 from '../../FakeData/Images/Rectangle27.png';
import Room3 from '../../FakeData/Images/Rectangle28.png';
import Rooms from '../Rooms/Rooms';


import map from '../../FakeData/Images/Search.png'

const Hotel = () => {
    

    const dataFake = [
        {
            name:"Muscat Holiday Resort",
            bed:"1 double bedFree cancellation ",
            kitchen: "Free Wi-Fi Kitchen",
            flexibility: "Cancellation flexibility available",
            image: Room1,
            rating: "4.9",
            price: "BDT 5000",
            mode:"Night"
        },{
            name:"Hotel Sea Shine",
            bed:"1 double bedFree cancellation",
            kitchen:"Free Wi-Fi Kitchen",
            flexibility: "Cancellation flexibility available",
            image: Room2,
            rating: "4.8",
            price: "BDT 5000",
            mode:"Night"
        },
        {
            name:"Hotel Sea Crown",
            bed:"1 double bedFree cancellation",
            kitchen:"Free Wi-Fi Kitchen",
            flexibility: "Cancellation flexibility available",
            image: Room3,
            rating: "4.9",
            price: "BDT 5000",
            mode:"Night"
        }
    ];
    return (
        <Container>
            <Navbar className="navSetting" collapseOnSelect="collapseOnSelect" expand="lg">
                <Link to="/home">
                    <Navbar.Brand href="#home"><img className="logoSize" src={logo} fluid="fluid" alt=""/></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                           <Nav.Link className="navbar" href="#news">News</Nav.Link>
                            <Nav.Link className="navbar" href="#destination">Destination</Nav.Link>
                            <Nav.Link className="navbar" href="#blog">Blog</Nav.Link>
                            <Nav.Link className="navbar" href="#contact">Contact</Nav.Link>
                        <Link to="/login"><Button className="logIn" variant="warning">Sign Up</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Row>
                <Col>
                    <h5>Stay in Cox's Bazar</h5>
                    {
                       dataFake.map(dataFake => <Rooms dataFake={dataFake}/>) 
                    }
                </Col>
                <Col>
                   <img className="mapSizing" src={map} alt=""/> 
                </Col>
            </Row>
        </Container>
    );
};

export default Hotel;