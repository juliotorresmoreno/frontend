import React, { Component } from 'react';
import { 
    Table, Button
} from 'reactstrap';
import { Map } from 'immutable';

const style = {
    row: {
        cursor: 'pointer'
    }
};

export default class extends Component {
    state = {
        select: -1,
        display: false,
        store: Map({
            data: [],
            columns: [],
            pathname: ''
        })
    };
    componentWillMount = () => {
        let data = Map({
            columns: this.props.columns||[], 
            data: this.props.data||[],
            pathname: this.props.pathname
        });
        this.setState({
            store: data
        });
    }
    componentWillReceiveProps = props => {
        let data = Map({
            columns: props.columns||[], 
            data: props.data||[],
            pathname: props.pathname
        });
        if (!data.equals(this.state.store)) {
            this.setState({
                store: data
            });
        }
    }
    handleCreate = () => {
        let {history} = this.props;
        let pathname = this.state.store.get('pathname');
        history.push(`${pathname}/create`);
    }
    handleEdit = () => {
        let {history} = this.props;
        let pathname = this.state.store.get('pathname');
        if (this.state.select !== -1) {
            history.push(`${pathname}/edit/${this.state.select}`);
            return;
        }
        history.push(`${pathname}/edit`);
    }
    handleRemove = () => {
        let {history} = this.props;
        let pathname = this.state.store.get('pathname');
        if (this.state.select !== -1) {
            history.push(`${pathname}/remove/${this.state.select}`);
            return;
        }
        history.push(`${this.props.pathname}/remove`);
    }
    handleSelect = select => () => {
        if (this.state.select !== select) {
            this.setState({select: select});
        } else {
            this.setState({select: -1});
        }
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(this.props.data[select]);
        }
    }
    handleHideShow = () => {
        this.setState({display: !this.state.display})
    }
	render() {
        const columns = this.state.store.get('columns')||[];
        const display = this.state.display;
        const select = this.state.select;
        const data = display?this.state.store.get('data')||[]:[];
		return (
			<div>
                <div>
                    <Button
                        style={{width: 100}} color="primary"
                        onClick={this.handleCreate}>
                        Registrar
                    </Button>&nbsp;
                    <Button
                        style={{width: 100}} color="primary"
                        onClick={this.handleHideShow}>
                        {!display?'Mostrar':'Ocultar'}
                    </Button>&nbsp;
                    <Button
                        style={{width: 100}} color="primary"
                        onClick={this.handleEdit}>
                        Modificar
                    </Button>&nbsp;
                    <Button style={{width: 100}} color="primary"
                        onClick={this.handleRemove}>
                        Eliminar
                    </Button>&nbsp;
                </div>
                <br />
				<Table style={{background: 'white'}}>
                    <thead>
                        <tr>
                            <th width={20}><input type='checkbox' disabled={true} /></th>
                            {columns.map((v,k) => {
                                return <th key={k} {...v.props}>{v.text}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((v,i) => (
                            <tr onClick={this.handleSelect(i)} style={style.row} key={i}>
                                <td><input type='checkbox' checked={select===i} /></td>
                                {columns.map((c,k) => {
                                    return <td key={k}>{v[c.name]}</td>
                                })}
                            </tr>
                        ))}
                    </tbody>
				</Table>
			</div>
		)
	}
};