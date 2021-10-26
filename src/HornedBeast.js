import { Component } from "react";
import heart from './assets/heartIcon.png';

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
            <h2>{this.props.title}</h2>
            <img 
                src={this.props.imgUrl} 
                alt={this.props.title} 
                title={this.props.title}
                onClick={this.handleClick}
            />
            <p>{this.props.description}</p>
            <p>
                <img src={heart} alt= 'favorites icon'/>: {this.state.votes}</p>
            </>
        )
    }
}

export default HornedBeast;