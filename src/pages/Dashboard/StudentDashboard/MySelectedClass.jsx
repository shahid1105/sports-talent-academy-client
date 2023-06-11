import { FaTrashAlt } from "react-icons/fa";
import useClassCart from "../../../Hooks/useClassCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [classCarts, refetch] = useClassCart();

  const handleDeletedClass = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/class-carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold italic text-center">
        --- Your All selected Classes ---
      </h1>
      <div className="overflow-x-auto mt-12 bg-base-300 font-bold justify-evenly">
        <table className="table">
          {/* head */}
          <thead className="bg-pink-300 ">
            <tr className="text-[17px] text-black ">
              <th>#</th>
              <th>Class Photo</th>
              <th>Instructor Name</th>
              <th>Class Name</th>
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
                        <img src={classCart.photoURL} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{classCart.instructorName}</td>
                <td>{classCart.className}</td>
                <td> ${classCart.price}</td>
                <td>
                  <button
                    onClick={() => handleDeletedClass(classCart)}
                    className="btn btn-ghost btn-sm bg-red-600 text-white">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: `/dashboard/payment/${classCart._id}`,
                    }}>
                    <button className="btn btn-sm text-white font-bold bg-yellow-600">
                      Pay
                    </button>
                  </Link>
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
