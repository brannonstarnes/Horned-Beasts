import { Component } from "react";
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
                horns= {beast.horns}
                />
                ))}
            </>
        )
    }
}

export default Main;