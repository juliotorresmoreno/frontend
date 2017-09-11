import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { hide as hideMessage } from '../../actions/messages';

export default class extends React.Component {
    state = { message: '' };
    handleChange = () => {
        const message = this.props.store.getState().messages.message;
        if (this.state.message !== message) {
            this.setState({
                message: message
            });
        }
    }
    componentWillMount = () => {
        const message = this.props.store.getState().messages.message;
        this.setState({
            message: message
        });
        this.unsubscribe = this.props.store.subscribe(this.handleChange);
    }
    componentWillUnmount = () => {
        this.unsubscribe();
    }
    handleClose = () => {
        const {dispatch} = this.props;
        dispatch(hideMessage());
    }
    render() {
        const message = this.state.message;
        return (
            <Modal isOpen={message !== ''} toggle={this.handleClose} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Información</ModalHeader>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.handleClose}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
