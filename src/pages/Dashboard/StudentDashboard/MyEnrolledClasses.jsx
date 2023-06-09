import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyEnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [allEnrolled, setAllEnrolled] = useState([]);
  console.log(allEnrolled);

  useEffect(() => {
    axiosSecure
      .get("/enrolled-classes")
      .then((res) => {
        const data = res.data;
        setAllEnrolled(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axiosSecure]);

  return (
    <div>
      <h1 className="text-3xl font-bold italic text-center">
        --- Your All, Payment Successful Classes Here ---
      </h1>
      <div className="overflow-x-auto mt-12 bg-base-300 font-bold justify-evenly">
        <table className="table">
          {/* head */}
          <thead className="bg-amber-400 ">
            <tr className="text-[17px] text-black ">
              <th>#</th>
              <th>Class Photo</th>
              <th>Instructor Name</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allEnrolled.map((enrolled, index) => (
              <tr key={enrolled._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={enrolled.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{enrolled.instructorName}</td>
                <td>{enrolled.className}</td>
                <td className="text-center">{enrolled.availableSeats}</td>
                <td> ${enrolled.price}</td>
                <td>
                  <p className="px-[6px] py-2 rounded-lg bg-green-400 text-white font-bold">
                    Payment Successful
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
