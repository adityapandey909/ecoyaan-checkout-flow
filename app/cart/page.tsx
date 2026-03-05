"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { cartData } from "@/data/mockData";

export default function CartPage() {
	const router = useRouter();

	const subtotal = cartData.cartItems.reduce(
		(acc, item) => acc + item.product_price * item.quantity,
		0,
	);

	const total = subtotal + cartData.shipping_fee;
	const isCartEmpty = cartData.cartItems.length === 0;

	return (
		<div className="max-w-3xl mx-auto p-8">
			<h1>Cart</h1>

			{isCartEmpty ? (
				<p className="mt-4 text-gray-600">Your cart is empty.</p>
			) : (
				cartData.cartItems.map((item) => (
					<div
						key={item.product_id}
						className="flex items-center gap-4 border p-4 rounded-lg shadow-sm mb-4"
					>
						<Image
							src={item.image}
							width={100}
							height={100}
							alt={item.product_name}
							className="rounded-md object-cover"
						/>
						<h3>{item.product_name}</h3>
						<p>Price: ₹{item.product_price}</p>
						<p>Quantity: {item.quantity}</p>
					</div>
				))
			)}

			<hr />

            <div className="mt-6 border-t pt-4">
                <p>Subtotal: ₹{subtotal}</p>
                <p>Shipping: ₹{cartData.shipping_fee}</p>
                <h2 className="text-xl font-bold">Total: ₹{total}</h2>
            </div>

			<button
				onClick={() => router.push("/checkout")}
				disabled={isCartEmpty}
				className={`px-6 py-3 rounded-lg mt-6 text-white ${isCartEmpty ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
			>
				Proceed to Checkout
			</button>
		</div>
	);
}
