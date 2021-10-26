import { Component } from "react";
import HornedBeast from "./HornedBeast";

class Main extends Component {
    render(){
        return(
            <div>
                <HornedBeast title={'Moose'} imgUrl={'https://i.natgeofe.com/k/592a06c1-c845-4851-a3fa-7be62e753683/full-body-moose_square.jpg?w=340&h=340'} description= {'A moose on the loose'}/>
                <HornedBeast title={'Unicorn'} imgUrl={'https://static.wikia.nocookie.net/the-heavens/images/e/e7/2ie99m96Mzo.jpg'} description= {'A "nice" unicorn'}/>
            </div>
        )
        
    }
}

export default Main;