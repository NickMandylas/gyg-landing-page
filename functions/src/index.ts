import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

import Stripe from "stripe";
import * as cors from "cors";

const corsHandler = cors({ origin: "https://gyg.org.au" });

const secretToken = functions.config().stripe.secret;

const stripe = new Stripe(secretToken, {
  apiVersion: "2020-08-27",
});

export function formatAmountForStripe(amount: number): number {
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: "AUD",
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

export const stripe_donate = functions.https.onRequest(
  async (request, response) => {
    corsHandler(request, response, async () => {
      if (request.method === "POST") {
        const amount: number = request.body.amount;
        try {
          // Validate the amount that was passed from the client.
          if (!(amount >= 1 && amount <= 9999)) {
            throw new Error("Invalid amount.");
          }

          // Create Checkout Sessions from body params.
          const params: Stripe.Checkout.SessionCreateParams = {
            submit_type: "donate",
            payment_method_types: ["card"],
            line_items: [
              {
                name: "Mural Donation - Greek Youth Generator",
                amount: formatAmountForStripe(amount),
                currency: "AUD",
                quantity: 1,
              },
            ],
            success_url: `${request.headers.origin}/donation-success`,
            cancel_url: `${request.headers.origin}/`,
          };

          const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
            params,
          );

          response.status(200).json(checkoutSession);
        } catch (err) {
          response.status(500).json({ statusCode: 500, message: err.message });
        }
      } else {
        response.setHeader("Allow", "POST");
        response.status(405).end("Method Not Allowed");
      }
    });
  },
);
