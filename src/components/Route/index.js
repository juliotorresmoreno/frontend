
import React from 'react';
import { Route } from 'react-router-dom';

export default ({ name, path, exact, component, ...rest }) => {
    const Render = props => {
        return React.createElement(component, { ...rest });
    }
    return (
        <Route name={name} path={path} exact={exact} render={Render} />
    )
};