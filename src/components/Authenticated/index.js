
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default class extends React.Component {
    state = {};
    componentWillMount = () => {
        let { name, path, exact, dispatch, component, ...rest } = this.props;
        this.setState({
            name: name,
            path: path,
            exact: exact, 
            component: component, 
            rest: {
                ...rest,
                dispatch: dispatch
            },
        });
    }
    componentWillReceiveProps = ({ name, path, exact, component, ...rest }) => {
        this.setState({
            name: name,
            path: path,
            exact: exact, 
            component: component, 
            rest: rest,
        });
    }
    render = () => {
        let { name, path, exact, component, rest } = this.state;
        const Render = props => {
            if (!rest || rest.session === null) {
                return <Redirect to='/login' />;
            }
            return React.createElement(component, { ...rest });
        }
        return <Route name={name} path={path} exact={exact} render={Render} />;
    }
};