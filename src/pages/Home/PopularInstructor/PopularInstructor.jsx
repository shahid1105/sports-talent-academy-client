import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const [topInstructors, setTopInstructor] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/users/instructors")
      .then((res) => {
        const data = res.data;
        setTopInstructor(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axiosSecure]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/instructors")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTopInstructor(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <div>
      <h3 className="md:text-3xl lg:text-3xl font-bold italic text-center">
        --- Our Top Instructors Here ---
      </h3>
      <p className="text-gray-500 mt-3 md:mt-8 lg:mt-8 md:px-32 lg:px-32 text-center">
        Our Top Instructors: Meet our experienced instructors who are passionate
        about fitness and dedicated to helping you achieve your goals. Get
        Expert Guidance: Benefit from their expertise as they lead classes in
        various disciplines, including Yoga, Pilates, Zumba, CrossFit, and more.
        Personalized Approach: Our instructors understand that everyone has
        different needs, and they tailor their classes to ensure a personalized
        experience for each participant.
      </p>
      <div className="mt-8 md:mt-24 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topInstructors.slice(0, 6).map((topInstructor, index) => (
          <PopularInstructorCard
            key={index}
            topInstructor={topInstructor}></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
