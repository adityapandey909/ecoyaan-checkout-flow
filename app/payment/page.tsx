"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const router = useRouter();

  const savedPayment = typeof window !== "undefined"
    ? localStorage.getItem("payment")
    : null;

  const [card, setCard] = useState(
    savedPayment ? JSON.parse(savedPayment).card : ""
  );

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!card) {
      alert("Card number required");
      return;
    }

    if (card.length < 12) {
      alert("Invalid card number");
      return;
    }

    // persist payment step data
    localStorage.setItem("payment", JSON.stringify({ card }));

    router.push("/success");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Payment</h1>

      <p>Enter payment details to continue.</p>

      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Card Number"
          value={card}
          maxLength={16}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, "");
            setCard(value);
          }}
          style={{ padding: "10px", width: "300px" }}
        />

        <br />
        <br />

        <div style={{ marginTop: "20px" }}>
          <button
            type="submit"
            style={{ padding: "10px 20px", marginRight: "10px" }}
          >
            Review Order
          </button>

          <button
            type="button"
            onClick={() => router.push("/checkout")}
            style={{ padding: "10px 20px" }}
          >
            Back to Shipping
          </button>
        </div>
      </form>
    </div>
  );
}