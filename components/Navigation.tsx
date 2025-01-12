import * as React from 'react';
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import dynamic from 'next/dynamic'

export default function Navigation() {
    return (
        <React.Fragment>
            <Container>
                <Container>
                    <a href = "/"><img src = "https://aaany-assets.s3.amazonaws.com/images/logo1.png" height = "200" style ={{paddingBottom: "10px"}}></img></a>
                </Container>
                <Container>
                    <div style = {{textAlign: "center", position: "relative", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <h1>
                    Aligarh Alumni Association 
                    </h1>
                    <h1>
                    of New York
                    </h1>
                    </div>
                </Container>
            </Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link href = "/" legacyBehavior passHref><Navbar.Brand>AAANY</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Link href = "/" legacyBehavior passHref><Nav.Link>Home</Nav.Link></Link>
                        <Link href = "/about" legacyBehavior passHref><Nav.Link>About</Nav.Link></Link>
                        <Link href = "/bylaws" legacyBehavior passHref><Nav.Link>Bylaws</Nav.Link></Link>
                        <Link href = "/team" legacyBehavior passHref><Nav.Link>Our Team</Nav.Link></Link>
                        <NavDropdownMenu title="Gallery" id="basic-nav-dropdown">
                            <DropdownSubmenu title = "2024">
                                <Link href = "/gallery/2024/picnic" legacyBehavior passHref><NavDropdown.Item>
                                    AAANY Picnic 2024
                                </NavDropdown.Item></Link>
                            </DropdownSubmenu>
                            <DropdownSubmenu title = "2023">
                                <Link href = "/gallery/2023/ssd" legacyBehavior passHref><NavDropdown.Item>
                                    AAANY Sir Syed Day 2023
                                </NavDropdown.Item></Link>
                                <Link href = "/gallery/2023/faaa" legacyBehavior passHref><NavDropdown.Item>
                                    FAAA 2023
                                </NavDropdown.Item></Link>
                            </DropdownSubmenu>
                            <Link href = "/gallery/2021" legacyBehavior passHref><NavDropdown.Item>
                                2021
                            </NavDropdown.Item></Link>
                            <Link href = "/gallery/2019" legacyBehavior passHref><NavDropdown.Item>
                                2019
                            </NavDropdown.Item></Link>
                            <Link href = "/gallery/2018" legacyBehavior passHref><NavDropdown.Item>
                                2018
                            </NavDropdown.Item></Link>
                            <Link href = "/gallery/2017" legacyBehavior passHref><NavDropdown.Item>
                                2017
                            </NavDropdown.Item>
                            </Link>
                        </NavDropdownMenu>
                        <NavDropdownMenu title="Publications" id="basic-nav-dropdown">
                            <DropdownSubmenu title = "2023">
                                <Link href = "/publications/2023/ssd" legacyBehavior passHref><NavDropdown.Item>
                                    AAANY Sir Syed Day 2023
                                </NavDropdown.Item></Link>
                                <Link href = "/publications/2023/faaa" legacyBehavior passHref><NavDropdown.Item>
                                    FAAA 2023
                                </NavDropdown.Item></Link>
                            </DropdownSubmenu>
                            <Link href = "/publications/2022" legacyBehavior passHref><NavDropdown.Item>
                                2022
                            </NavDropdown.Item></Link>
                            <Link href = "/publications/2021" legacyBehavior passHref><NavDropdown.Item>
                                2021
                            </NavDropdown.Item></Link>
                            <Link href = "/publications/2019" legacyBehavior passHref><NavDropdown.Item>2019</NavDropdown.Item></Link>
                        </NavDropdownMenu>
                        <Link href = "/ads" legacyBehavior passHref><Nav.Link>Advertisements</Nav.Link></Link>
                        <Link href = "/donate" legacyBehavior passHref><Nav.Link>Donate</Nav.Link></Link>
                        <Link href = "/membership" legacyBehavior passHref><Nav.Link>Membership</Nav.Link></Link>
                        <Link href = "/archive" legacyBehavior passHref><Nav.Link>Archive</Nav.Link></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </React.Fragment>
    )
}