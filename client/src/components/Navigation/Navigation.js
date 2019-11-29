import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <NavLink to="/">AAANY</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>
                    <NavLink to="/about">About</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to = "/team">Our Team</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/vision">Vision</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/tax">Federal Tax Exempt</NavLink>
                </Nav.Link>
                <NavDropdown title="Events" id="basic-nav-dropdown">
                    <NavDropdown.Item >
                        <NavLink to="/upcoming">Upcoming Events</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >
                        <NavLink to="/past">Past Events</NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                    <NavLink to="/news">AMU News</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/membership">Membership</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/contact">Contact Us</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/donate">Donate</NavLink>
                </Nav.Link>
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                    <NavDropdown.Item >
                        <NavLink to="/magazines">Magazines</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >
                        <NavLink to="/documents">Documents</NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            )
    }
}

export default Navigation;

/*
<Navbar brand='Aligarh Alumni Association of NY' right className="teal lighten-2">
                    <NavItem><Button><Link to="/about">About</Link></Button></NavItem>
                    <NavItem>
                        <Dropdown trigger={<Button><Link to="/events">Events</Link></Button>} options={{hover: true, belowOrigin: true}} style={size}>
                        <NavItem style={color}><Link to="/upcoming">Upcoming Events</Link></NavItem>
                        <NavItem style={color}><Link to="/past">Past Events</Link></NavItem>
                        </Dropdown>
                    </NavItem>
                    <NavItem><Link to="/contact">Contact Us</Link></NavItem>
                    <NavItem><Link to="/donate">Donate</Link></NavItem>
                </Navbar>
*/

/*
<Navbar inverse collapseOnSelect >
                    <Navbar.Header>
                        <Navbar.Brand>
                        <Link to="/">
                            Aligarh Alumni Association of NY
                        </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavItem eventKey={1}>
                            <Link to="/about">About</Link>
                        </NavItem>
                        <NavDropdown eventKey={2} title="Events" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}><Link to="/upcoming">Upcoming Events</Link></MenuItem>
                            <MenuItem eventKey={2.2}><Link to="/past">Past Events</Link></MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3}>
                            <Link to="/contact">Contact Us</Link>
                        </NavItem>
                        <NavItem eventKey={4}>
                            <Link to="/donate">Donate</Link>
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
*/

/*
<br></br>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/">
                        <img src={ logo } href="/" alt = "Logo" style = {logoStyle}></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donate">Donate</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
*/