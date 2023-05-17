import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';


const Bookings = () => {
	const { user, setLoading } = useContext(AuthContext);
	console.log(user.email);
	let url = `http://localhost:5000/bookings?email=${user.email}`;
	const [bookings, setBookings] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setBookings(data);
				setLoading(false);
			});
	}, []);

    const handleDelete = (_id) => {
			console.log(_id);
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!',
			}).then((result) => {
				if (result.isConfirmed) {
					fetch(`http://localhost:5000/bookings/${_id}`, {
						method: 'DELETE',
					})
						.then((res) => res.json())
						.then((data) => {
							console.log(data);
							if (data.DeleteCount > 0) {
								Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
							}
							const remaining = bookings.filter(booking => booking._id !== _id);
							setBookings(remaining);
						});
				}
			});
		};

        const handleConfirm = _id =>{
console.log(_id);
fetch(`http://localhost:5000/bookings/${_id}`,{
    method:'PATCH',
    headers:{
        'content-type' : 'application/json'
    },
    body : JSON.stringify({status : 'confirm'})
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.modifiedCount > 0){
		const remaining = bookings.filter(booking => booking._id !== _id);
		const updated = bookings.find((booking) => booking._id === _id);
		updated.status = 'confirm';
		const newBooking = [updated, ...remaining];
		setBookings(newBooking);

    }
})
        } 
	return (
		<div>
			<p>{bookings.length}</p>

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr className="flex justify-between">
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<th>Image</th>
							<th>Name</th>
							<th>Price</th>
							<th>Date</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{ 
                        bookings.map((booking) => (
							// console.log(booking)
							<BookingRow
								key={booking._id}
								booking={booking}
								handleDelete={handleDelete}
								handleConfirm={handleConfirm}
							></BookingRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Bookings;
