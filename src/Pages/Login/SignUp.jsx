import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [regError, setRegError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSignIn = async (event) => {
			event.preventDefault();
			setRegError('');
			setSuccess('');
			const form = event.target;
			const name = form.name.value;
			const photo = form.photo.value;
			const email = form.email.value;
			const password = form.password.value;
			console.log(name, email, password);
			if (!password) {
				setRegError('Password is empty');
				return;
			} else if (password.length < 6) {
				setRegError('Password must contain 6 digits.');
				return;
			}
			//  else if (!/(?=.*?[A-Z])/.test(password)) {
			// 	setRegError('Provide at least one Uppercase.');
			// 	return;
			// } else if (!/(?=.*?[a-z])/.test(password)) {
			// 	setRegError('Provide at least one lowercase.');
			// 	return;
			// } else if (!/(?=.*?[0-9])/.test(password)) {
			// 	setRegError('Provide at least one digit.');
			// 	return;
			// } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
			// 	setRegError('Provide at least one special character');
			// 	return;
			// }

			// createUserWithEmailAndPassword(auth, email, password)
				createUser(email, password)
				.then((result) => {
					const createdUser = result.user;
					console.log(createdUser);
					// updateUserData(createdUser, name, photo);
					// event.target.reset();
					setSuccess('User has been created successfully!');
					swal({
						title: 'Welcome!',
						text: 'User has been created successfully!',
						icon: 'success',
						buttons: false,
						className: 'text-red-300',
						closeModal: true,
					});
					// navigate(from, { replace: true });
					setRegError('');
				})
				.catch((error) => {
					const text = error.code.split('/');
					const text1 = text[1].split('-').join(' ');
					const err = text1.charAt(0).toUpperCase() + text1.slice(1) + '.';
					// swal(err);

					setRegError(err);
					// alert('Error: '+ err);
				});

			const updateUserData = (user, name, photo) => {
				updateProfile(user, {
					displayName: name,
					photoURL: photo,
				})
					.then(() => {
						console.log('Updated');
					})
					.catch((error) => {
						setRegError(error.message);
					});
			};
		};
    return (
			<div>
				<div>
					<div className="min-h-screen bg-base-200 flex justify-end pb-10">
						<div className="hero-content flex-col lg:w-2/5">
							<div className="text-center p-5">
								<h1 className="text-5xl font-bold text-pink-700">
									Register now!
								</h1>
							</div>
							<div className="card w-full shadow-2xl bg-base-100">
								<form onSubmit={handleSignIn} className="card-body">
									<div className="form-control">
										<label className="label">
											<span className="text-form">Name</span>
										</label>
										<input
											type="text"
											name="name"
											placeholder="name"
											// required
											className="input input-bordered"
										/>
									</div>

									<div className="form-control">
										<label className="label">
											<span className="text-form">Photo url</span>
										</label>
										<input
											type="text"
											name="photo"
											placeholder="photo url"
											className="input input-bordered"
										/>
									</div>

									<div className="form-control">
										<label className="label">
											<span className="text-form">Email</span>
										</label>
										<input
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
										{/* <Checkbox /> */}

										<p className="flex gap-2">
											<input type="checkbox" />

											<label
												// to="/terms"
												className="text-form hover:text-purple-500 hover:underline"
												htmlFor="my-modal-3"
											>
												Accept Terms & Condition
											</label>

											{/* The button to open modal */}
											{/* <label htmlFor="my-modal-3" className="btn">
										open modal
									</label> */}

											{/* Put this part before </body> tag */}
											<input
												type="checkbox"
												id="my-modal-3"
												className="modal-toggle"
											/>
											<div className="modal">
												<div className="modal-box relative">
													<label
														htmlFor="my-modal-3"
														className="btn btn-sm btn-circle absolute right-2 top-2"
													>
														✕
													</label>
													{/* <Terms></Terms> */}
												</div>
											</div>
										</p>
									</div>
									<div>
										{regError && <p className="text-error">{regError}</p>}
									</div>
									<div>
										{success && <p className="text-success">{success}</p>}
									</div>
									<div className="form-control mt-6">
										<button className="btn btn-primary">Register</button>
									</div>
									<p className="text-form text-center">
										Already Have an Account?
										<Link
											to="/login"
											className="hover:underline hover:text-purple-500"
										>
											Login
										</Link>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default SignUp;