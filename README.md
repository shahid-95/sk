# SK POP WORKS — WhatsApp booking page

This is a standalone Next.js booking page. It does **not** use a database, admin dashboard, server storage, or WhatsApp API.

When a customer fills in the form and taps **Send Booking on WhatsApp**, the customer's WhatsApp opens with a pre-filled booking message addressed to SK POP WORKS. The customer must tap **Send** inside WhatsApp to send it.

## Business WhatsApp number

Configured as `918052050846` (India country code + 10-digit number). Change `WHATSAPP_NUMBER` in `src/app/page.tsx` if the business number changes.

## Run locally

Install Node.js 20+, then:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push this folder to a new GitHub repository, import it into Vercel, and deploy. No database or API credentials are required.

## Important

This direct WhatsApp flow is not a silent automatic notification. It opens WhatsApp on the customer's device with the details filled in; the customer confirms by pressing Send. No booking record is stored on the website.
