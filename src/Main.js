import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast";
import data from "./data.json";


class Main extends Component {
    render(){
        return(
          <>
            <Container id = 'mainBox'>
              <Row xs={1} sm={2} md={3} lg={4}>
                {data.map(beast => (
                  <HornedBeast beast={beast} />
                ))}  
              </Row>
            </Container>
          </>
        )
    }
}

export default Main;