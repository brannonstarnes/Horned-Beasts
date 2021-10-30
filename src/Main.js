import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast";



class Main extends Component {
    

    render(){
        return(
          <>
            <Container id = 'mainBox'>
              <Row xs={1} sm={2} md={3} lg={4}>
                {this.props.beastData.map((beast, idx) => (
                <HornedBeast key={idx} beastProfile ={beast} chooseBeast={this.props.chooseBeast}/>
                ))} 
              </Row>                      
            </Container>
          </>
        )
    }
}

export default Main;