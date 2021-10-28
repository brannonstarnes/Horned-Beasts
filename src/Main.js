import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast";
import HornSelectForm from "./components/HornSelectForm";


class Main extends Component {
    

    render(){
        return(
          <>
            <Container id = 'mainBox'>
            <HornSelectForm />
              <Row xs={1} sm={2} md={3} lg={4}>
                {this.props.beastData.map(beast => (
                  <HornedBeast beastProfile ={beast} chooseBeast={this.props.chooseBeast}/>
                ))}  
              </Row>
            </Container>
          </>
        )
    }
}

export default Main;