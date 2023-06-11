import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();

  const [classes, setClasses] = useState([]);
  // console.log(classes);

  useEffect(() => {
    axiosSecure
      .get("/classes")
      .then((res) => {
        const data = res.data;
        setClasses(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axiosSecure]);

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
