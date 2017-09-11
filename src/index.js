import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';


import Authenticated from './components/Authenticated';
import Route from './components/Route';


import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";


// Containers
import Full from './containers/Full';


// Views
import Login from './views/Pages/Login';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const history = createBrowserHistory();

const Routes = connect(state => ({session: state.auth.session}))(props => {
    let params = {...props, store: store, history: history};
    return (
        <Router history={history}>
            <Switch>
				<Route exact path="/login" name="Login Page" {...params} component={Login}/>				
				<Authenticated path="/" name="Home" component={Full} {...params} />
            </Switch>
        </Router>
    )
});


const Root = props => (
    <Provider store={store}>
        <Routes {...props} />
    </Provider>
);


ReactDOM.render(<Root />, document.getElementById('root'));