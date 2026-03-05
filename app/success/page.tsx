"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Shipping = {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
};

type Payment = {
  card: string;
};

export default function SuccessPage() {
  const router = useRouter();

  const [shipping] = useState<Shipping | null>(() => {
    if (typeof window === "undefined") return null;
    const s = localStorage.getItem("shipping");
    return s ? JSON.parse(s) : null;
  });

  const [payment] = useState<Payment | null>(() => {
    if (typeof window === "undefined") return null;
    const p = localStorage.getItem("payment");
    return p ? JSON.parse(p) : null;
  });

  function placeOrder() {
    alert("Order placed successfully!");

    localStorage.removeItem("shipping");
    localStorage.removeItem("payment");

    router.push("/");
  }

  if (!shipping) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>No checkout data found</h2>
        <button onClick={() => router.push("/cart")}>Back to Cart</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Review Your Order</h1>

      <h2>Shipping Details</h2>
      <p>Name: {shipping.name}</p>
      <p>Email: {shipping.email}</p>
      <p>Phone: {shipping.phone}</p>
      <p>City: {shipping.city}</p>
      <p>State: {shipping.state}</p>

      <h2 style={{ marginTop: "20px" }}>Payment</h2>
      <p>Card: **** **** **** {payment?.card?.slice(-4)}</p>

      <button
        onClick={placeOrder}
        style={{ marginTop: "30px", padding: "12px 20px" }}
      >
        Place Order
      </button>
    </div>
  );
}