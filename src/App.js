import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import ImageModal from './components/ImageModal.js';
import HornSelectForm from "./components/HornSelectForm";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      chosenBeast: {},
      hornsWanted: {},
      beastData: data
    }
} 

chooseBeast = (beastProfile) => {
  this.setState({
    chosenBeast: beastProfile,
    show: true,
  })
};

hideModal = () => {
  this.setState({ 
    show: false
  })
};

handleChange = (e) => {
  //do not need to prevent default bc not a submit
  let filterSelect = e.target.value;
  let filteredBeastData;

  if (filterSelect === '1'){
    filteredBeastData = this.state.beastData.filter(beast => beast.horns === 1);
    this.setState({beastData: filteredBeastData});
  } else if (filterSelect === '2'){
    filteredBeastData = this.state.beastData.filter(beast => beast.horns === 2);
    this.setState({beastData: filteredBeastData});

  } else if (filterSelect === '3'){
    filteredBeastData = this.state.beastData.filter(beast => beast.horns === 3);
    this.setState({beastData: filteredBeastData});

  } else if (filterSelect === '100'){
    filteredBeastData = this.state.beastData.filter(beast => beast.horns === 100);
    this.setState({beastData: filteredBeastData});

  } else{
    this.setState({beastData: {data}})
    console.log('heyoo');
};
};

  render() {
    return (
      <div>
        <Header />
        <HornSelectForm handleChange={this.handleChange}/>
        <Main chooseBeast={this.chooseBeast} beastData={this.state.beastData}/>
        <Footer />
        <ImageModal show={this.state.show} chosenBeast={this.state.chosenBeast} hideModal={this.hideModal}></ImageModal>
      </div>
    )
  }
}