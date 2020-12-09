/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_live_51Hb3JjEQljLztpslIEshmv0qePAwYEdfK9cPoHL46hg6k9QvL7cr6032qx72iyNyJtWzhYLCm3htJexn8NrnXEop00CeBrh26B",
    );
  }
  return stripePromise;
};

export default getStripe;
