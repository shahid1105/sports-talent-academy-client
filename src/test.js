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




// const ManageClasses = () => {
//     const [disable, setDisable] = useState(false);
//     const [axiosSecure] = useAxiosSecure();
//     const [allClasses, setAllClasses] = useState([]);

//     useEffect(() => {
//         axiosSecure
//             .get(`/manage-classes`)
//             .then((res) => {
//                 const data = res.data;
//                 setAllClasses(data);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, [axiosSecure]);

//     const updateStatus = (allClass, role) => {
//         fetch(`https://sports-talent-academy-server.vercel.app/manage-status/${allClass._id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ role }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 if (data.modifiedCount) {
//                     setDisable(true);
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "Success",
//                         showConfirmButton: false,
//                         timer: 1500,
//                     });
//                 }
//             });
//     };

//     const handleApproved = (allClass) => {
//         updateStatus(allClass, "Approved");
//     };

//     const handleDeny = (allClass) => {
//         updateStatus(allClass, "Deny");
//     };

//     return (
//         <div>
//             <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead className="bg-teal-400">
//                         <tr className="text-black ">
//                             <th>ClassPhoto & Name</th>
//                             <th>InstructorName & Gmail</th>
//                             <th>A:Seats</th>
//                             <th>Price</th>
//                             <th>Status</th>
//                             <th>Approve</th>
//                             <th>Deny</th>
//                             <th>Feedback</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allClasses.map((allClass) => (
//                             <tr key={allClass._id}>
//                                 <td>
//                                     <div className="flex items-center space-x-3">
//                                         <div className="avatar">
//                                             <div className="mask mask-squircle w-12 h-12">
//                                                 <img
//                                                     src={allClass.photoURL}
//                                                     alt="Avatar Tailwind CSS Component"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="text-black">{allClass.className}</div>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <span>{allClass.instructorName}</span>
//                                     <br />
//                                     <span className="badge badge-ghost badge-sm text-black">
//                                         {allClass.instructorEmail}
//                                     </span>
//                                 </td>
//                                 <td className="text-center">{allClass.availableSeats}</td>
//                                 <td>{allClass.price}</td>
//                                 <td className="text-blue-700">{allClass.status}</td>

//                                 <td>
//                                     <button
//                                         disabled={disable || allClass.status === "Approved"} // Disable if already approved
//                                         onClick={() => handleApproved(allClass)}
//                                         className="btn btn-xs bg-sky-400 text-white btn-accent"
//                                     >
//                                         Approved
//                                     </button>
//                                 </td>
//                                 <td>
//                                     <button
//                                         disabled={disable || allClass.status === "Approved"} // Disable if already approved
//                                         onClick={() => handleDeny(allClass)}
//                                         className="btn btn-ghost bg-red-500 btn-xs"
//                                     >
//                                         Deny
//                                     </button>
//                                 </td>
//                                 <td>
//                                     <button className="btn btn-xs font-semibold bg-yellow-400 text-black btn-warning border-gray-800 border-4">
//                                         Feedback
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };






// const Feedback = () => {
//     const handleSendFeedback = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const feedback = form.feedback.value;
//         console.log(feedback);
//     };

//     return (
//         <div className="px-24 bg-slate-400 h-full">
//             <h1 className="mb-12 mt-8 text-white font-bold text-2xl text-center">
//                 Write your feedback here
//             </h1>
//             <form onSubmit={handleSendFeedback}>
//                 <div>
//                     <textarea name="feedback" id="" cols="90" rows="10"></textarea>
//                 </div>
//                 <div>
//                     <input
//                         className="text white btn btn-warning font-bold mt-4"
//                         type="submit"
//                         value="Send Feedback"
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Feedback;
