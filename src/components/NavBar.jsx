import React from 'react';
import { Navbar, Nav, Container, Button, NavbarBrand } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div `
a, .navbar-brand, .navbar-nav, nav-link, button {
    color: #adb1b8;
    &:hover {
        color: white
    }
}
`

const NavBar = () => {

    return (
        <Styles>
        <div>
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
                            <Link to='/commands'>
                            <Button variant='dark'>Команды</Button>
                            </Link>
                        </Nav.Link>
                        <Button variant='dark' href='https://discord.gg/6PFKbRfkSy' target='_blank'
                            style={{textAlign: 'center', marginTop: '8px'}}
                        >Поддержка</Button>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar variant='dark' expand='md' bg='dark' fixed='bottom' style={{height: '30px', position: 'fixed', justifyContent: 'center', display: 'flex'}}>
                <Navbar.Text>
                    <li>Timmy 2022</li>
                </Navbar.Text>
            </Navbar>
        </div>
        </Styles>
    );
};

export default NavBar;