import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { id } = useParams();
  // console.log("id", id);

  const [singleData, setSingleData] = useState({});
  // console.log(singleData);

  const price = singleData.price;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/payment/${id}`)
      .then((res) => {
        const paymentData = res.data;
        // console.log(paymentData);
        setSingleData(paymentData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // axios
  //   .get(`http://localhost:5000/payment/${id}`)
  //   .then((res) => {
  //     const paymentData = res.data;
  //     console.log(paymentData);
  //     // setSingleData(paymentData);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return (
    <div className="bg-slate-100 h-96 rounded-md">
      <h3 className="text-3xl font-bold text-orange-400 mb-12 text-center pt-12">
        Payment
      </h3>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} singleData={singleData}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
