import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../../src/assets/icons/google.png'
import github from '../../../src/assets/icons/github.png';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
const Login = () => {
    const { signIn } =useContext(AuthContext)
const[loginError, setLoginError] = useState('')
const [success, setSuccess] = useState('');

    const handleLogIn = (event) => {
			event.preventDefault();
			const form = event.target;
			const email = form.email.value;
			const password = form.password.value;
			console.log(email, password);
			setLoginError('');
			signIn(email, password)
				.then((result) => {
					const loggedUser = result.user;
					console.log(loggedUser);
					setSuccess('You are logged in successfully!');
					navigate(from, { replace: true });
				})
				.catch((error) => {
					const text = error.code.split('/');
					const text1 = text[1].split('-').join(' ');
					const err = text1.charAt(0).toUpperCase() + text1.slice(1) + '.';
					setLoginError(err);
					// alert('Error: '+ err);
					// swal('Error : ' + err);
					console.log(err);
				});
		};
    return (
			<div>
				<div>
					<div className="min-h-screen bg-base-200 flex justify-end pb-10">
						<div className="hero-content flex-col lg:w-2/5">
							<div className="text-center p-5">
								<h1 className="text-5xl font-bold text-pink-700">Login now!</h1>
							</div>
							<form
								onSubmit={handleLogIn}
								className="card w-full shadow-2xl bg-base-100"
							>
								<div className="card-body">
									<div className="form-control">
										<label className="label">
											<span className="text-form">Email</span>
										</label>
										<input
											// ref={emailRef}
											type="email"
											name="email"
											placeholder="email"
											required
											className="input input-bordered"
										/>
									</div>
									<div className="form-control">
										<label className="label">
											<span className="text-form">Password</span>
										</label>
										<input
											type="password"
											name="password"
											placeholder="password"
											required
											className="input input-bordered"
										/>
										<label className="label">
											<a
												href="#"
												// onClick={handlerRestPassword}
												className="text-form hover:text-purple-500"
											>
												Forget password?
											</a>
										</label>
									</div>
									<div>
										{loginError && <p className="text-error">{loginError}</p>}
									</div>
									<div>
										{success && <p className="text-success">{success}</p>}
									</div>
									<div className="form-control mt-6">
										<button className="btn btn-primary">Login</button>
									</div>
									<p className="text-form text-center">
										New to Car Doctor?
										<Link
											to="/signUp"
											className="hover:underline hover:text-purple-500"
										>
											Sign Up
										</Link>
									</p>
								</div>
							</form>
							<div>
								<p className="text-pink-500">or sign up using</p>
								<div className="flex gap-4 mt-3">
									<img
										// onClick={handleGoogleSignIN}
										src={google}
										alt=""
										className="h-12 hover:scale-110 hover:link"
									/>
									<img
										// onClick={handleGithubSighIn}
										src={github}
										alt=""
										className="h-12 hover:scale-110 hover:link"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Login;