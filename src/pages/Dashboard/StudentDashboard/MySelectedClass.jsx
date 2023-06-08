import { FaTrashAlt } from "react-icons/fa";
import useClassCart from "../../../Hooks/useClassCart";

const MySelectedClass = () => {
  const [classCarts, refetch] = useClassCart();

  return (
    <>
      <h1 className="text-3xl font-bold italic text-center">
        --- Your All selected Classes ---
      </h1>
      <div className="overflow-x-auto mt-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Photo</th>
              <th>Instructor Name</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classCarts.map((classCart, index) => (
              <tr key={classCart._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classCart.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{classCart.instructorName}</td>
                <td>{classCart.name}</td>
                <td className="text-center">{classCart.availableSeats}</td>
                <td> ${classCart.price}</td>
                <td>
                  <button
                    // onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-sm bg-red-600 text-white">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <button className="btn btn-sm text-white font-bold bg-yellow-600">
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySelectedClass;
