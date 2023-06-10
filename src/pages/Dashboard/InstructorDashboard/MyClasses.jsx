import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [myClasses, setMyClasses] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    if (user && user.email) {
      axiosSecure.get(`/my-classes/${user.email}`).then((res) => {
        // console.log(res.data);
        setMyClasses(res.data);
      });
    }
  }, [axiosSecure, user]); // use dependency some time it console is not stop now right its

  return (
    <>
      <h1 className="text-3xl font-bold italic text-center">
        --- All Added Classes ---
      </h1>
      <div className="overflow-x-auto mt-12 bg-base-300 font-semibold justify-evenly">
        <table className="table">
          {/* head */}
          <thead className="bg-lime-300 ">
            <tr className="text-black ">
              <th>#</th>
              <th>Class Photo</th>
              <th>Class Name</th>
              <th>AvailableSeats</th>
              <th>Price</th>
              <th>TotalEnrolledStudents</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myClasses.map((myClass, index) => (
              <tr key={myClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={myClass.photoURL} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{myClass.className}</td>
                <td className="text-center">{myClass.availableSeats}</td>
                <td> ${myClass.price}</td>
                <td className="text-center">0</td>
                <td className="text-blue-700">{myClass.status}</td>
                <td>
                  <button className="btn btn-xs font-semibold bg-yellow-400 text-black btn-warning border-gray-800 border-4">
                    Feedback
                  </button>
                </td>
                <td>
                  <Link to="/dashboard/updateclass">
                    <button className="btn btn-xs font-semibold bg-sky-400 text-white btn-accent">
                      Update
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

export default MyClasses;
