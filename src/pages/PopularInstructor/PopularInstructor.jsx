import { useEffect, useState } from "react";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const [topInstructors, setTopInstructor] = useState([]);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => {
        setTopInstructor(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h3 className="text-3xl font-bold italic text-center">
        --- Our Top Instructors Here ---
      </h3>
      <p className="text-gray-500 mt-8 px-32 text-center">
        Our Top Instructors: Meet our experienced instructors who are passionate
        about fitness and dedicated to helping you achieve your goals. Get
        Expert Guidance: Benefit from their expertise as they lead classes in
        various disciplines, including Yoga, Pilates, Zumba, CrossFit, and more.
        Personalized Approach: Our instructors understand that everyone has
        different needs, and they tailor their classes to ensure a personalized
        experience for each participant. Extensive Class Selection: Choose from
        a wide range of classes, such as Swimming, Cycling, Boxing, HIIT, and
        Strength Training, among others. Join Today: Start your fitness journey
        with our top-notch instructors and take advantage of their knowledge,
        motivation, and support to reach your fitness milestones.
      </p>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
