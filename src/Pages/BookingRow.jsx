import React from 'react';
const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
	const { _id, customerName, price, service, date, img, status } = booking;
	console.log(status);

	return (
		<tr className="flex justify-between">
			<th>
				<label>
					<button onClick={() => handleDelete(_id)} className="btn btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</label>
			</th>
			<td>
				<div className="flex items-center space-x-10">
					<div className="avatar">
						<div className="rounded w-20 h-20">
							<img src={img} alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div>
						<div className="font-bold">{customerName}</div>
						<div className="text-sm opacity-50">United States</div>
					</div>
				</div>
			</td>
			<td>
				${price}
				<br />
				<span className="badge badge-ghost badge-sm">{service}</span>
			</td>
			<td>{date}</td>
			<th>
				{(status == 'confirm') ? (
					<span>confirmed</span>
				) : (
					<button
						onClick={() => handleConfirm(_id)}
						className="btn btn-ghost btn-xs"
					>
						pending
					</button>
				)}
			</th>
		</tr>
	);
};

export default BookingRow;
