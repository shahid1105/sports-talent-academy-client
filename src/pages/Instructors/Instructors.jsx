import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import InstructorsRow from "./InstructorsRow";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const [instructors, setInstructor] = useState([]);
  // console.log(instructors);

  useEffect(() => {
    axiosSecure
      .get("/users/instructors")
      .then((res) => {
        const data = res.data;
        setInstructor(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axiosSecure]);
  return (
    <div className="overflow-x-auto">
      <h3 className="text-3xl font-bold italic text-center">
        --- Our All Instructors Here ---
      </h3>
      <table className="table mt-24">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>See Classes</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor, index) => (
            <InstructorsRow
              key={instructor._id}
              index={index}
              instructor={instructor}></InstructorsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;
