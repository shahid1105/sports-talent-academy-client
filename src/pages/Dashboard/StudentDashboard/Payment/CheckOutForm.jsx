import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useClassCart from "../../../../Hooks/useClassCart";

const CheckOutForm = ({ singleData, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [, refetch] = useClassCart();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log("payment method", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    // console.log("payment Intent", paymentIntent);

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      axiosSecure
        .patch(`/updated-class/${singleData.classItemId}`)
        .then((res) => {
          console.log(res.data);
        });

      setTransactionId(paymentIntent.id);
      // save payments information to the server
      const payment = {
        email: user?.email,
        userName: user?.displayName,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        photoURL: singleData.photoURL,
        instructorName: singleData.instructorName,
        singleDataItems: singleData._id,
        classItemId: singleData.classItemId,
        className: singleData.className,
        status: "service Active",
      };
      axiosSecure.post("/cart-payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedResult.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center text-black">
        <form onSubmit={handleSubmit} className="w-1/2">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            className="btn btn-block btn-primary mt-12"
            disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
        </form>
      </div>
      {cardError && (
        <p className="text-3xl font-semibold italic text-center mt-5 text-red-600">
          {cardError}
        </p>
      )}
      {transactionId && (
        <p className="text-3xl text-center mt-5 text-green-500">
          Transaction complete
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
