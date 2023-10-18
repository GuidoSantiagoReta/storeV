import React, {useState} from 'react'
import { Navbar, Nav, Container, NavDropdown, } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavBar.css';
import ecommerce from "../../assets/ecommerce.png"
import { navlinks } from './config';

import {AiOutlineShoppingCart} from "react-icons/ai";
const NavBar = () => {
const [collapsed, setCollapsed] = useState(true);


  return (
    <>
    <Navbar  className="nav-bar" variant="dark" expand="md">
        <Container fluid>
          <Navbar.Brand className='brand' as={Link} to="/">
            <img className="image-logo" src={ecommerce} id="inverse-rotation" height="60" alt="" />
            Store.Vite
          </Navbar.Brand>
          <Navbar.Toggle
            className="toggle"
            aria-controls="basic-navbar-nav"
            onClick={() => setCollapsed(!collapsed)}
            onBlur={() => setCollapsed(true)}
          >
            {collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                height="2rem"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                height="2rem"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">

           <Nav.Link href="#home" className= "nav-link" as={Link} to="/">Home</Nav.Link>

              <Nav.Link  href="#favorites"className= "nav-link" as={Link} to="/favorites">
                Favoritos
            </Nav.Link>
             
            {/*<Nav.Link href="#Products"className= "nav-link" as={Link} to="/product/add">
            <AiOutlineShoppingCart size={30}/>
            </Nav.Link>*/}
            
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
     </>
  )
}

export default NavBar
