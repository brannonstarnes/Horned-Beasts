import { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Footer extends Component{ 
    render(){
      return(
        <Navbar bg='primary'>
          <Container>
        <h2>Author: Brannon Starnes</h2>
          </Container>
        </Navbar>
    )
  }
}

export default Footer;