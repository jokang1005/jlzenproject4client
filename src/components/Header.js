import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Carousel from 'react-bootstrap/Carousel'

const Header = (props) => {

    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/proxy/3JPEW0GQRUL40sb91C3jXR4ze4Iz-kf20-ofSRKGeF6ZF5OGfiwfT1caqSFHiXTYoKYQ699FOYOgSJQfC0vxbcXpmUy89esOBNZ1GUxiiFEhsPaVET0jHOyPgSiEeeOkbjiifQmz5nivaEDg5Gi2a4fmQdgOsKxUahtQTA"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Student Info</h3>
                <p>Database for Student Profiles</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
        </>
    )

}

export default Header