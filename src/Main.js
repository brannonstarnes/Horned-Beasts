import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast";
import data from "./data.json";


class Main extends Component {
    render(){
        return(
            <>
                {data.map((beast) => ( 
                <HornedBeast 
                title={beast.title} 
                imgUrl={beast.image_url} 
                description= {beast.description}
                keyword= {beast.keyword}
                horns= {beast.horns}/>
                ))}</>
        )
    }
}

export default Main;