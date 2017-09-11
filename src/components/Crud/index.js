import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Route from '../Route';

import Table from './table';
import Form from './form';


export default class extends Component {
    state = {};
    handleChange = () => {
        this.setState({
            data: this.props.store.getState().crud[this.props.state]
        });
    }
    componentWillMount() {
        this.setState({
            data: this.props.store.getState().crud[this.props.state]
        });
        this.unsubscribe = this.props.store.subscribe(this.handleChange);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
	render() {
        const path = this.props.pathname;
		return (
			<div>
                <Switch>
                    <Route
                        {...this.props} exact
                        path={`${path}/create`}
                        action='Creación'
                        component={Form} />
                    <Route
                        {...this.props} exact 
                        path={`${path}/edit/:id`}
                        data={this.state.data}
                        action='Edición'
                        component={Form} />
                    <Route
                        {...this.props} exact 
                        path={`${path}/edit`}
                        data={this.state.data}
                        action='Edición'
                        component={Form} />
                    <Route
                        {...this.props} exact 
                        path={`${path}/remove/:id`}
                        data={this.state.data}
                        action='Eliminación'
                        component={Form} />
                    <Route
                        {...this.props} exact 
                        path={`${path}/remove`}
                        data={this.state.data}
                        action='Eliminación'
                        component={Form} />
                    <Route
                        {...this.props} exact 
                        path={`${path}`}
                        data={this.state.data}
                        component={Table} />
                </Switch>
			</div>
		)
	}
};