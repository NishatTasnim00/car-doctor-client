import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';

const CheckOut = () => {
	const { user } = useContext(AuthContext);
	// console.log(user);
	const service = useLoaderData();
	const { _id, title, price, img } = service;

	// console.log(service);
	const handleBookService = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const date = form.date.value;
		const email = form.email.value;

		const booking = {
			customerName: name,
			email,
			date,
			service: title,
			price: price,
			img,
		};
		// console.log(booking);
        fetch('http://localhost:5000/bookings', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(booking)
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data)
                        if(data.insertedId){
                            swal("Service booked successfully!")
                        }
					});
	};

	

	return (
		<div>
			<h1>Book Service</h1>
			<form onSubmit={handleBookService} className="w-3/4 mx-auto">
				<div className="flex gap-4">
					<input
						name="name"
						type="text"
						placeholder="name"
						defaultValue={user?.displayName}
						className="input input-bordered input-primary w-full"
					/>
					<input
						name="date"
						type="date"
						placeholder="Date"
						className="input input-bordered input-primary w-full"
					/>
				</div>
				<div className="flex gap-4">
					<input
						name="price"
						type="text"
						placeholder={'$' + price}
						defaultValue={'$' + price}
						className="input input-bordered input-primary w-full"
					/>
					<input
						name="email"
						type="text"
						placeholder="email"
						defaultValue={user?.email}
						className="input input-bordered input-primary w-full"
					/>
				</div>
				<textarea
					placeholder="your message"
					className="textarea textarea-bordered textarea-lg w-full"
				></textarea>
				<button className="btn btn-block">block</button>
			</form>
		</div>
	);
};

export default CheckOut;
