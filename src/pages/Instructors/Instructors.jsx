import { useEffect, useState } from "react";
import InstructorsRow from "./InstructorsRow";

const Instructors = () => {
  const [instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
            <th>Classes Taken</th>
            <th>Class Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor, index) => (
            <InstructorsRow
              key={index}
              index={index}
              instructor={instructor}></InstructorsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;
