import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
export default class ImageModal extends Component {

    handleClose = () => {
        this.props.hideModal()
        console.log('clicked!')
    }

    render() {
        return (
            <>
              <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.chosenBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Container> <Image src={this.props.chosenBeast.image_url}fluid rounded /></Container>{this.props.chosenBeast.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
              </Modal>
            </>
        )
    }
}