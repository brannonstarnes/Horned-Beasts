import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './card.css';

export default class HornedBeast extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            votes: 0,
            show: 'false'
        }
    }
    

  handleClick = () => {
    //increase votes when clicked
    this.setState({ votes: this.state.votes + 1 });
    console.log("Beast Clicked!")
  }

  handleImgClick = () => {
    this.props.chooseBeast(this.props.beastProfile);
  }
     
  render(){
        
        return(
          
            <Card id='beastCard' bg='info' border='primary' style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={this.props.beastProfile.image_url}
                alt={this.props.beastProfile.description}
                title={this.props.beastProfile.title} 
                onClick={this.handleImgClick}/>
              <Card.Body>
                <Card.Title>{this.props.beastProfile.title}</Card.Title>
                <Card.Text>{this.props.beastProfile.description}</Card.Text>
                <Button variant='primary' onClick={this.handleClick} alt='heart icon'>❤️: {this.state.votes}</Button>
              </Card.Body>
            </Card>       
        )
    }
}