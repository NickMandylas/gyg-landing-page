import React, { useState, useReducer, useRef } from "react";
import getStripe from "../utils/get-stripe";
import { fetchPostJSON } from "../utils/api-helpers";
import { Sparkles } from "heroicons-react";

const reducer = (state, action) => {
  switch (action.type) {
    case "5-DOLLAR":
      return {
        fiveDollar: true,
        tenDollar: false,
        twentyFiveDollar: false,
        fiftyDollar: false,
        custom: false,
      };
    case "10-DOLLAR":
      return {
        fiveDollar: false,
        tenDollar: true,
        twentyFiveDollar: false,
        fiftyDollar: false,
        custom: false,
      };
    case "25-DOLLAR":
      return {
        fiveDollar: false,
        tenDollar: false,
        twentyFiveDollar: true,
        fiftyDollar: false,
        custom: false,
      };
    case "50-DOLLAR":
      return {
        fiveDollar: false,
        tenDollar: false,
        twentyFiveDollar: false,
        fiftyDollar: true,
        custom: false,
      };
    case "CUSTOM-DOLLAR":
      return {
        fiveDollar: false,
        tenDollar: false,
        twentyFiveDollar: false,
        fiftyDollar: false,
        custom: true,
      };
    default:
      throw new Error();
  }
};

const initialState = {
  fiveDollar: true,
  tenDollar: false,
  twentyFiveDollar: false,
  fiftyDollar: false,
  custom: false,
};

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [donationState, dispatch] = useReducer(reducer, initialState);
  const customInput = useRef(null);

  return (
    <form
      className="grid grid-cols-3 gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        // Create a Checkout Session.

        const response = await fetchPostJSON(
          "https://us-central1-greek-youth-generator.cloudfunctions.net/stripe_donate",
          {
            amount: donationAmount,
          },
        );

        if (response.statusCode === 500) {
          console.error(response.message);
          return;
        }

        // Redirect to Checkout.
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId: response.id,
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
        console.warn(error.message);
        setLoading(false);
      }}
    >
      <button
        className={
          "bg-blue-600 p-4 rounded-lg hover:bg-opacity-100 hover:text-white" +
          (donationState.fiveDollar
            ? " text-white bg-opacity-100"
            : " bg-opacity-25")
        }
        type="button"
        onClick={() => {
          setDonationAmount(5);
          dispatch({ type: "5-DOLLAR" });
          customInput.current.value = "";
          return false;
        }}
      >
        $5
      </button>
      <button
        className={
          "bg-blue-600 bg-opacity-25 p-4 rounded-lg hover:bg-opacity-100 hover:text-white" +
          (donationState.tenDollar
            ? " text-white bg-opacity-100"
            : " bg-opacity-25")
        }
        type="button"
        onClick={() => {
          setDonationAmount(10);
          dispatch({ type: "10-DOLLAR" });
          customInput.current.value = "";
        }}
      >
        $10
      </button>
      <button
        className={
          "bg-blue-600 bg-opacity-25 p-4 rounded-lg hover:bg-opacity-100 hover:text-white" +
          (donationState.twentyFiveDollar
            ? " text-white bg-opacity-100"
            : " bg-opacity-25")
        }
        type="button"
        onClick={() => {
          setDonationAmount(25);
          dispatch({ type: "25-DOLLAR" });
          customInput.current.value = "";
        }}
      >
        $25
      </button>
      <button
        className={
          "bg-blue-600 bg-opacity-25 p-4 rounded-lg hover:bg-opacity-100 hover:text-white" +
          (donationState.fiftyDollar
            ? " text-white bg-opacity-100"
            : " bg-opacity-25")
        }
        type="button"
        onClick={() => {
          setDonationAmount(50);
          dispatch({ type: "50-DOLLAR" });
          customInput.current.value = "";
        }}
      >
        $50
      </button>
      <input
        placeholder="Other Amount"
        className="col-span-2 p-4 rounded-lg border-blue-900 border"
        type="number"
        inputMode="numeric"
        step="1"
        ref={customInput}
        onChange={(e) => {
          const re = /^[0-9\b]+$/;
          if (e.target.value === "" || re.test(e.target.value)) {
            const value = e.target.value;

            if (value === "") {
              e.target.value = 1;
            }

            if (Number(value) < 1) {
              e.target.value = 1;
            }

            if (Number(value) > 9999) {
              e.target.value = 9999;
            }

            setDonationAmount(e.target.value);
            dispatch({ type: "CUSTOM-DOLLAR" });
          } else {
            const shortend = e.target.value.substring(
              0,
              e.target.value.length - 2,
            );

            e.target.value = shortend;
          }
        }}
      />
      <div className="col-span-3">
        <button
          className="btn text-white bg-blue-700  hover:bg-blue-900 w-full p-4"
          type="submit"
        >
          {loading ? (
            <Sparkles className="animate-spin" />
          ) : (
            `Donate $${donationAmount}`
          )}
        </button>
      </div>
    </form>
  );
};

export default Donation;
