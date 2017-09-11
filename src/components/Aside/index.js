

import React, { Component } from 'react';
import moment from 'moment';


moment.locale('es');

export default class extends Component {
	state = {
		activeTab: '1'
	};

	toggle = tab => {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	handleChange = () => {
        const history = this.props.store.getState().messages.history;
        if (this.state.history !== history) {
            this.setState({
                history: history
            });
        }
    }

    componentWillMount() {
        const history = this.props.store.getState().messages.history;
        this.setState({ history: history });
        this.unsubscribe = this.props.store.subscribe(this.handleChange);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
	
	render() {
		const history = this.state.history;
		return (
			<aside style={{position: 'relative'}} className="aside-menu open">
				<div className="callout m-0 py-2 text-muted text-center bg-faded text-uppercase">
					<small><b>Historia</b></small>
				</div>
				<hr className="transparent mx-3 my-0"/>
				{history.map((v, i) => {
					return (
						<div key={i}>
							<div className="callout callout-warning m-0 py-3">
								<div>{v.message}</div>
								<small className="text-muted mr-3">
									<i className="icon-calendar"></i>&nbsp; 
									{moment(v.date).format('MMMM Do YYYY, h:mm:ss a')}
								</small>
							</div>
							<hr className="mx-3 my-0"/>
						</div>
					)
				})}
			</aside>
		)
	}
}