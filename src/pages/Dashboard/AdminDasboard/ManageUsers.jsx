import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const [disable, setDisable] = useState(true);

  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const updateUserRole = (user, role) => {
    fetch(`http://localhost:5000/users/vip/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setDisable(true);
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Make admin/instructor",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeAdmin = (user) => {
    updateUserRole(user, "admin");
  };

  const handleMakeInstructor = (user) => {
    updateUserRole(user, "instructor");
  };

  return (
    <div>
      <div className="overflow-x-auto bg-slate-200">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-[14px] text-black bg-emerald-300">
              <th>#</th>
              <th>User</th>
              <th>Instructor</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-80">{user.email}</div>
                    </div>
                  </div>
                </td>
                {/* <td>
                  {user.role === "instructor" || user.role === "admin" ? (
                    <>
                      <button
                        disabled={disable}
                        className="btn btn-ghost btn-xs text-white font-bold bg-indigo-500">
                        Add Instructor
                      </button>
                      <button
                        disabled={disable}
                        className={`px-5  rounded-lg  btn-xs text-white font-bold ${
                          disable ? "bg-red-500" : "bg-indigo-500"
                        }`}>
                        Add Instructor
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-ghost btn-xs text-white font-bold bg-indigo-500">
                        Add Instructor
                      </button>
                    </>
                  )}
                </td> */}
                <td>
                  {user.role === "instructor" || user.role === "admin" ? (
                    <>
                      {user.role === "instructor" && (
                        <button
                          disabled={disable}
                          className="btn px-5 rounded-lg  btn-ghost btn-xs text-white font-bold bg-indigo-500">
                          Instructor
                        </button>
                      )}
                      {user.role === "admin" && (
                        <button
                          disabled={disable}
                          className={`px-5 rounded-lg btn-xs text-white font-bold ${
                            disable ? "bg-red-500" : "bg-indigo-500"
                          }`}>
                          Add Instructor
                        </button>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-ghost btn-xs text-white font-bold bg-indigo-500">
                      Add Instructor
                    </button>
                  )}
                </td>

                <td>
                  {user.role === "admin" || user.role === "instructor" ? (
                    <>
                      {user.role === "admin" && (
                        <button
                          disabled={disable}
                          className="btn px-6 rounded-lg  btn-ghost btn-xs bg-lime-600 text-white font-bold">
                          Admin
                        </button>
                      )}
                      {user.role === "instructor" && (
                        <button
                          disabled={disable}
                          className={`px-4 rounded-lg btn-xs text-white font-bold ${
                            disable ? "bg-red-500" : "bg-indigo-500"
                          }`}>
                          Add Admin
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost btn-xs bg-lime-600 text-white font-bold">
                        Add Admin
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
