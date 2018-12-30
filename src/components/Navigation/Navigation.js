import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Dropdown, Button } from "react-materialize"

const size = {
    width: "500px"
}

const color = {
    backgroundColor: "red"
}

class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default Navigation;

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