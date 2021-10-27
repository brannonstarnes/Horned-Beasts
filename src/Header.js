import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Container>
                    <h1>Horned Beasts!</h1>
                </Container>
            </Navbar>
        )
    }
}

export default Header; 