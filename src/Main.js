import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast";
import ImageModal from "./components/ImageModal.js"


class Main extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      show: false,
      chosenBeast: null
    }
}

  chooseBeast = (beastProfile) => {
    this.setState({
      show: true,
      chosenBeast: beastProfile
    })
  };



  hideModal = () => {
    this.setState({ 
      show: false
    })
  };
    
    render(){
        return(
          <>
            <Container id = 'mainBox'>
              <Row xs={1} sm={2} md={3} lg={4}>
                {this.props.beastData.map(beast => (
                  <HornedBeast beastProfile ={beast} chooseBeast={this.chooseBeast}/>
                ))}  
              </Row>
            </Container>
            <ImageModal show={this.state.show} chosenBeast={this.state.chosenBeast} hideModal={this.hideModal}></ImageModal>
          </>
        )
    }
}

export default Main;