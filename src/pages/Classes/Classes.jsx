import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  console.log(classes);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold italic text-center">
        --- Our All Classes here ---
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-8 mt-24">
        {classes.map((classObj, index) => (
          <ClassCard key={index} classData={classObj} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
