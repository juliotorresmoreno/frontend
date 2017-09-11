import React, { Component } from 'react';

class Header extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
		document.body.classList.toggle('aside-menu-hidden');
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	sidebarToggle(e) {
		e.preventDefault();
		document.body.classList.toggle('sidebar-hidden');
	}

	sidebarMinimize(e) {
		e.preventDefault();
		document.body.classList.toggle('sidebar-minimized');
	}

	mobileSidebarToggle(e) {
		e.preventDefault();
		document.body.classList.toggle('sidebar-mobile-show');
	}

	render() {
		return (
			<header className="app-header navbar">
				<button className="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" onClick={this.mobileSidebarToggle}>&#9776;</button>
				<a className="navbar-brand" href="/"> </a>
				<ul className="nav navbar-nav d-md-down-none">
					<li className="nav-item">
						<button className="nav-link navbar-toggler sidebar-toggler" type="button" onClick={this.sidebarToggle}>&#9776;</button>
					</li>
				</ul>
				<ul className="nav navbar-nav ml-auto">
					<li className="nav-item">
						<span className="d-md-down-none">admin</span>
					</li>
					&nbsp;&nbsp;&nbsp;
				</ul>
			</header>
		)
	}
}

export default Header;
