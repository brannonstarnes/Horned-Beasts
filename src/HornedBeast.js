import { Component } from "react";
import heart from './assets/heartIcon.png';
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            votes: 0,
        }
    }
    //define a handle click function
handleClick = () => {
    //increase votes when clicked
    this.setState({ votes: this.state.votes + 1 });
    console.log("Beast Clicked!")
}

    render(){
        return(
            <>
            <Card style={{ width: '18rem' }}>
              <Card.Img 
              variant="top"
              src={this.props.imgUrl}
              alt={this.props.keyword}
              title={this.props.title}
              />
              <Card.Body>
                <Card.Title>
                    {this.props.title}
                </Card.Title>
                <Card.Text>
                    {this.props.description}
                </Card.Text>
    
  </Card.Body>
</Card>
        </>    
        )
    }
}

export default HornedBeast;

