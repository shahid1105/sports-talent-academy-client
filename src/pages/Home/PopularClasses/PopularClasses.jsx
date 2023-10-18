import { useEffect, useState } from "react";


const PopularClasses = () => {
  const [poplarClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("https://sports-talent-academy-server.vercel.app/popular-classes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPopularClasses(data);
      });
  }, []);

  return (
    <div className="md:mb-12 lg:mb-12 md:mt-20 lg:mt-20">
      <>
        <h3 className="md:text-3xl lg:text-3xl font-bold italic text-center">
          --- Our Top Classes Here ---
        </h3>
      </>
      <p className="text-gray-500 mt-3 md:mt-8 lg:mt-8 md:px-32 lg:px-32 text-center">
        Discover our Top Sports Classes: Experience the thrill of our top sports
        classes led by skilled instructors. Whether you are a beginner or an
        advanced athlete, we have something for everyone. From intense cardio
        workouts to strength training and skill development, our classes cover a
        wide range of sports disciplines. Join our popular classes like
        Badminton, Tennis, Basketball, Soccer, Swimming, and more.
      </p>
      <div className="mt-8 md:mt-24 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {poplarClasses.map((popularClass, index) => (
          <>
            <>
              <div key={index} className="card w-[100%] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={popularClass.photoURL}
                    alt=""
                    className="rounded-xl h-[200px]"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title ">
                    Class Name:{" "}
                    <span className="text-2xl font-bold">
                      {popularClass.className}
                    </span>
                  </h2>
                  <div className="space-y-4 mt-2">
                    <p className="text-lg font-bold">
                      TotalEnrolled:
                      <span className="text-pink-600 ms-1">
                        {popularClass.totalEnrolled
                          ? popularClass.totalEnrolled
                          : "0"}
                      </span>
                    </p>
                    <p className="text-lg font-bold">
                      InstructorName :
                      <span className="text-pink-600 ms-1">
                        {popularClass.instructorName}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          </>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
