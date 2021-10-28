import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
                    <Modal.Title>Beast Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Beast Description</Modal.Body>
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