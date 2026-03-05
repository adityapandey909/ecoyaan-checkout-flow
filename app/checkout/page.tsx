"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
	const router = useRouter();

	const savedShipping = typeof window !== "undefined"
		? localStorage.getItem("shipping")
		: null;

	const [form, setForm] = useState(
		savedShipping
			? JSON.parse(savedShipping)
			: {
				name: "",
				email: "",
				phone: "",
				pincode: "",
				city: "",
				state: "",
			}
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!form.email.includes("@")) {
			alert("Invalid email");
			return;
		}

		if (form.phone.length !== 10) {
			alert("Phone must be 10 digits");
			return;
		}

		// persist shipping data between checkout steps
		localStorage.setItem("shipping", JSON.stringify(form));

		router.push("/payment");
	};

	return (
		<div style={{ padding: "40px" }}>
			<h1>Shipping Address</h1>

			<form onSubmit={handleSubmit}>
				<input
					name="name"
					placeholder="Full Name"
					value={form.name}
					onChange={handleChange}
					required
				/>
				<br />
				<br />

				<input
					name="email"
					placeholder="Email"
					value={form.email}
					onChange={handleChange}
					required
				/>
				<br />
				<br />

				<input
					name="phone"
					placeholder="Phone Number"
					value={form.phone}
					onChange={handleChange}
					required
				/>
				<br />
				<br />

				<input
					name="pincode"
					placeholder="PIN Code"
					value={form.pincode}
					onChange={handleChange}
					required
				/>
				<br />
				<br />

				<input
					name="city"
					placeholder="City"
					value={form.city}
					onChange={handleChange}
					required
				/>
				<br />
				<br />

				<input
					name="state"
					placeholder="State"
					value={form.state}
					onChange={handleChange}
					required
				/>
				<br />
				<br />

				<button type="submit">Continue to Payment</button>
			</form>
		</div>
	);
}
