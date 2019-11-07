import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_loxVuLvdnKaXxoq7ZDD4aHMP00EupkPJrg";
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("payment successful");
      })
      .catch(error => {
        console.log("payment error", JSON.parse(error));
        alert("There was an issue with your payment. Please try again later");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="loliStore"
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
