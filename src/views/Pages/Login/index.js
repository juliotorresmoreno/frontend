

import React, { Component } from 'react';
import { login } from '../../../actions/auth';


class Login extends Component {
	state = {
		usuario: '',
		password: ''
	}
	handleChange = ({target}) => {
		this.setState({
			[target.name]: target.value
		});
	}
	handleLogin = () => {
		const {dispatch} = this.props;
		dispatch(login(this.state))
			.then(() => {
				const {history} = this.props;
				history.push('/');
			});
	}
	render() {
		return (
			<div className="app flex-row align-items-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-4">
							<div className="card-group mb-0">
								<div className="card p-4">
									<div className="card-block">
										<h1>Login</h1>
										<p className="text-muted">
											Ingresa a tu cuenta<br />(usuario: admin, password: admin)
										</p>
										<div className="input-group mb-3">
											<span className="input-group-addon"><i className="icon-user"></i></span>
											<input
												type="text" name="usuario"
												className="form-control" 
												onChange={this.handleChange}
												value={this.state.usuario}
												placeholder="Usuario"/>
										</div>
										<div className="input-group mb-4">
											<span className="input-group-addon"><i className="icon-lock"></i></span>
											<input 
												type="password" name="password"
												className="form-control" 
												onChange={this.handleChange}
												value={this.state.password}
												placeholder="Contraseña"/>
										</div>
										<div className="row">
											<div className="col-6">
												<button
													onClick={this.handleLogin}
													type="button"
													className="btn btn-primary px-4">
													Login
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
