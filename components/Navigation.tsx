import * as React from 'react';
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap"

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
                    <Link href = "/" passHref><Navbar.Brand>AAANY</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Link href = "/" passHref><Nav.Link>Home</Nav.Link></Link>
                        <Link href = "/about" passHref><Nav.Link>About</Nav.Link></Link>
                        <Link href = "/team" passHref><Nav.Link>Our Team</Nav.Link></Link>
                        <NavDropdown title="Gallery" id="basic-nav-dropdown">
                            {/*<!--<NavDropdown.Item href="/gallery/2021">2022</NavDropdown.Item>*/}
                            <Link href = "/gallery/2021" passHref><NavDropdown.Item>
                                2021
                            </NavDropdown.Item></Link>
                            <Link href = "/gallery/2019" passHref><NavDropdown.Item>2019</NavDropdown.Item></Link>
                            <Link href = "/gallery/2018" passHref><NavDropdown.Item>
                                2018
                            </NavDropdown.Item></Link>
                            <Link href = "/gallery/2017" passHref><NavDropdown.Item>
                                2017
                            </NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <NavDropdown title="Publications" id="basic-nav-dropdown">
                            {/*<!--<NavDropdown.Item href="/gallery/2021">2022</NavDropdown.Item>*/}
                            <Link href = "/publications/2021" passHref><NavDropdown.Item>
                                2021
                            </NavDropdown.Item></Link>
                            <Link href = "/publications/2019" passHref><NavDropdown.Item>2019</NavDropdown.Item></Link>
                        </NavDropdown>
                        <Link href = "/ads" passHref><Nav.Link>Advertisements</Nav.Link></Link>
                        <Link href = "/donate" passHref><Nav.Link>Donate</Nav.Link></Link>
                        <Link href = "/membership" passHref><Nav.Link>Membership</Nav.Link></Link>
                        <Link href = "/archive" passHref><Nav.Link>Archive</Nav.Link></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}