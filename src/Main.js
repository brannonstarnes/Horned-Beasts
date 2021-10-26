import { Component } from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends Component {
    render(){
        return(
            <CardGroup>
                {data.map((beast) => ( 
                <HornedBeast 
                title={beast.title} 
                imgUrl={beast.image_url} 
                description= {beast.description}
                keyword= {beast.keyword}
                horns= {beast.horns}/>
                ))}
            </CardGroup>
        )
    }
}

export default Main;