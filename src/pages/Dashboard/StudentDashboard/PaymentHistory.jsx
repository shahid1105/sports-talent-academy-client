import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [paymentHistory, setPaymentHistory] = useState([]);
  // console.log(paymentHistory);

  useEffect(() => {
    if (user && user.email) {
      axiosSecure
        .get(`/payment-history?email=${user?.email}`)
        .then((res) => {
          const data = res.data;
          setPaymentHistory(data);
          // console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [axiosSecure, user]);

  return (
    <div>
      <h1 className="text-2xl font-bold  text-cyan-500">payment history:</h1>
      <div className="overflow-x-auto mt-4">
        <table className="table bg-zinc-100">
          {/* head */}
          <thead>
            <tr className="bg-blue-400 font-semibold text-white rounded">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>price</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((history, index) => (
              <tr key={history._id} className="font-semibold">
                <th>{index + 1}</th>
                <td>{history.userName}</td>
                <td>{history.email}</td>
                <td>{history.date}</td>
                <td>$ {history.price}</td>
                <td>{history.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
