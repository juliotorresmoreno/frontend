import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { create, update, remove } from '../../actions/crud';
import { show as showMessage } from '../../actions/messages';

const style = {
    buttons: {
        width: 100
    }
}

export default class extends Component {
    state = {};
    constructor(props) {
        super(props);
        const columns = this.props.columns;
        let state = {};
        for (let i = 0; i < columns.length; i++) {
            state[columns[i].name] = '';
        }
        this.state = state;
    }
    componentWillMount = () => {
        const id = this.props.computedMatch.params.id;
        if (id !== undefined && Array.isArray(this.props.data)) {
            this.setState({...this.props.data[id]});
        }
    }
    componentWillReceiveProps = props => {
        const id = props.computedMatch.params.id;
        if (id !== undefined && Array.isArray(this.props.data)) {
            this.setState({...props.data[id]});
        }
    }
    handleCancel = () => {
        let {history} = this.props;
        history.push(this.props.pathname);
    }
    handleSave = () => {
        let {dispatch} = this.props;
        switch(this.props.action) {
            case 'Creación':
                dispatch(create(this.props.state, this.state))
                    .then(() => {
                        let {history} = this.props;
                        dispatch(showMessage(`Se ha creado el nuevo ${this.props.singular}.`));
                        history.push(this.props.pathname);
                    });
                break;
            case 'Edición':
                const id = this.props.computedMatch.params.id;
                dispatch(update(this.props.state, id, this.state))
                    .then(() => {
                        let {history} = this.props;
                        dispatch(showMessage(`Se ha actualizado el ${this.props.singular}.`));
                        history.push(this.props.pathname);
                    });
                break;
            default:
        }
    }
    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }
    handleSearch = e => {
        const action = this.props.action;
        if (e.key === 'Enter' && action !== 'Creación') {
            const search = this.props.search;
            const data = this.props.data||[];
            const history = this.props.history;
            const remove = action === 'Eliminación';
            const {dispatch} = this.props;
            for (let i = 0; i < data.length; i++) {
                if (data[i][search] === this.state[search]) {
                    if (remove) {
                        history.push(`${this.props.pathname}/remove/${i}`);
                    } else {
                        history.push(`${this.props.pathname}/edit/${i}`);
                    }
                    return;
                }
            }
            dispatch(showMessage(`No se ha encontrado el ${this.props.singular}.`));
        }
    }
    handleRemove = () => {
        this.setState({confirmation: true});
    }
    handleClose = () => {
        this.setState({confirmation: false});
    }
    handleRemoveConfirm = () => {
        const {dispatch} = this.props;
        const id = this.props.computedMatch.params.id;
        dispatch(remove(this.props.state, id))
            .then(() => {
                let {history} = this.props;
                dispatch(showMessage(`Se ha eliminado el ${this.props.singular}.`));
                history.push(this.props.pathname);
            });
    }
    render() {
        const id = this.props.computedMatch.params.id;
        const title = this.props.title;
        const action = this.props.action;
        const columns = this.props.columns;
        const disabled = action === 'Eliminación' || (action !== 'Creación' && id === undefined);
        const search = this.props.search;
        const remove = action === 'Eliminación';
        return (
            <div className="animated fadeIn">
                <div className="row">                        
                    <div className="col-sm-12 col-xs-12 col-md-8 offset-md-2">
                        <div className="card">
                            <div className="card-header">
                                <strong>{title}</strong> <small>{action}</small>
                            </div>
                            <div className="card-block">
                                {columns.map((v, i) => {
                                    let input;
                                    if (v.type === 'textarea') {
                                        input = <textarea
                                                    className="form-control"
                                                    onChange={this.handleChange}
                                                    readOnly={disabled&&v.name!==search}
                                                    onKeyPress={this.handleSearch}
                                                    value={this.state[v.name]}
                                                    name={v.name} />
                                    } else {
                                        input = <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={this.handleChange}
                                                    value={this.state[v.name]}
                                                    readOnly={disabled&&v.name!==search}
                                                    onKeyPress={this.handleSearch}
                                                    name={v.name} />;
                                    }
                                    return (
                                        <div key={i} className="form-group">
                                            <label htmlFor={v.name}>{v.text}</label>
                                            {input}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="card-footer">
                                {!remove?<Button disabled={disabled} onClick={this.handleSave} style={style.buttons} color="primary">
                                    <i className="fa fa-dot-circle-o"></i> Enviar
                                </Button>:<Button onClick={this.handleRemove} style={style.buttons} color="danger">
                                    <i className="fa fa-dot-circle-o"></i> Eliminar
                                </Button>}&nbsp;
                                <Button onClick={this.handleCancel} style={style.buttons} color="success">
                                    <i className="fa fa-ban"></i> Cancelar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.confirmation} toggle={this.handleClose}>
                    <ModalHeader toggle={this.toggle}>Confirmación</ModalHeader>
                    <ModalBody>
                        Realmente deseas eliminar este {this.props.singular}?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.handleRemoveConfirm}>Eliminar</Button>
                        <Button color="primary" onClick={this.handleClose}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}