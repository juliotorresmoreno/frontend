import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Route from '../../components/Route';

import Students from '../../views/Components/Students'
import Teachers from '../../views/Components/Teachers'
import Courses from '../../views/Components/Courses'
import Message from '../../components/Message'

export default class extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<div className="app-body">
					<div style={{width: '100%', display: 'flex'}}>
						<Sidebar {...this.props} />
						<main style={{flex:1}}>
							<Breadcrumb />
							<div className="container-fluid">
								<Switch>
									<Route
										path="/Student"
										name="Students" {...this.props}
										component={Students}/>
									<Route
										path="/Teacher"
										name="Teachers" {...this.props} 
										component={Teachers}/>
									<Route
										path="/Course"
										name="Courses" {...this.props}
										component={Courses}/>
								</Switch>
							</div>
						</main>
						<Aside {...this.props} />
					</div>
				</div>
				<Message {...this.props} />
			</div>
		);
	}
}
