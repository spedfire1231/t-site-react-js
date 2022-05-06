import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import suport from '../Slider/support1.jpg'

const NavBar = () => {
    const Styles = styled.div `
        a, .navbar-brand, .navbar-nav, nav-link {
            color: #adb1b8;
            &:hover {
                color: white
            }
        }
    `

    return (
        <div>
            <Styles>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                <Navbar.Brand href='/'>
                    <strong>| T I M M Y |</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link>
                            <Link to='/'>
                                <Button variant='dark'>Главная</Button>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/users'>
                            <Button variant='dark'>Команды</Button>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/about'>
                            <Button variant='dark'>Преимущества</Button>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </Styles>
        </div>
    );
};

export default NavBar;