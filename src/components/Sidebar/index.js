import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

	handleClick = e => {
		e.preventDefault();
		e.target.parentElement.classList.toggle('open');
	}

	render() {
		return (
			<div className="sidebar" style={{position: 'relative'}}>
				<nav className="sidebar-nav">
					<ul className="nav">
						<li className="nav-item">
							<NavLink
								to={'/'}
								className="nav-link"
								activeClassName="active">
								<i className="icon-speedometer"></i>Home
							</NavLink>
						</li>
						<li className="nav-item nav-dropdown open">
							<a className="nav-link nav-dropdown-toggle" href=""
								onClick={this.handleClick}>
								<i className="icon-puzzle"></i>Entidades
							</a>
							<ul className="nav-dropdown-items">
								<li className="nav-item">
									<NavLink
										to={'/Student'}
										className="nav-link"
										activeClassName="active">
										<i className="icon-puzzle"></i>Gestionar Estudiantes
									</NavLink>
									<NavLink
										to={'/Teacher'}
										className="nav-link"
										activeClassName="active">
										<i className="icon-puzzle"></i>Gestionar Docentes
									</NavLink>
									<NavLink
										to={'/Course'}
										className="nav-link"
										activeClassName="active">
										<i className="icon-puzzle"></i>Gestionar Cursos
									</NavLink>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Sidebar;
