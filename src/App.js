import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import ImageModal from './components/ImageModal.js';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      chosenBeast: {}
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

  render() {
    return (
      <div>
        <Header />
        <Main chooseBeast={this.chooseBeast}  beastData={data}/>
        <Footer />
        <ImageModal show={this.state.show} chosenBeast={this.state.chosenBeast} hideModal={this.hideModal}></ImageModal>
      </div>
    )
  }
}