# Ecoyaan Checkout Flow

This project implements a **multi-step checkout flow MVP** using **Next.js and TypeScript**.

The application demonstrates a simple checkout process including shipping information, payment, order review, and success confirmation.

---

## Live Demo

https://ecoyaan-checkout-flow.vercel.app

---

## Repository

https://github.com/adityapandey909/ecoyaan-checkout-flow

---

## Features

- Cart page displaying selected items
- Multi-step checkout process
- Shipping information form
- Payment step
- Order review page
- Order success confirmation
- Form validation
- State persistence using localStorage

---

## Architecture

The application uses the **Next.js App Router structure**, where each checkout step is implemented as a separate page.

app/
cart/
checkout/
payment/
success/

Each page represents a step in the checkout flow.

State between steps is stored using **localStorage**, allowing the user’s data to persist while navigating between pages.

---

## Tech Stack

- Next.js
- React
- TypeScript
- TailwindCSS
- ESLint

---

## Running Locally

Clone the repository:
git clone https://github.com/adityapandey909/ecoyaan-checkout-flow.git

Install dependencies:
npm install

Run the development server:
npm run dev

Open: http://localhost:3000
