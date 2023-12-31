import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { useEffect, useState } from "react";

const ClassCard = ({ classData }) => {
  const [disabled, setDisabled] = useState(true);
  const { className, photoURL, instructorName, availableSeats, price, _id } =
    classData;

  const navigate = useNavigate();
  const location = useLocation();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  useEffect(() => {
    if (isAdmin || isInstructor) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [isAdmin, isInstructor]);

  const { user } = useAuth();

  const addToClass = () => {
    // console.log(data);
    if (user && user.email) {
      const selectedClass = {
        classItemId: _id,
        instructorName,
        availableSeats,
        className,
        photoURL,
        price,
        email: user.email,
      };
      fetch("https://sports-talent-academy-server.vercel.app/class-cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // setDisabled(true);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added in my selected classes page",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to selected the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div
        className={`card w-96 ${
          availableSeats === 0 ? "bg-red-500" : "bg-base-100"
        } shadow-xl`}>
        <figure className="px-10 pt-10">
          <img src={photoURL} alt="Shoes" className="rounded-xl h-[300px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Class Name:{" "}
            <span className="text-violet-700 italic font-bold">
              {className}
            </span>
          </h2>
          <h2 className="mt-1 mb-3">
            Instructor Name:{" "}
            <span className="text-fuchsia-600 font-bold">{instructorName}</span>
          </h2>
          <div className="flex gap-24">
            <div>
              <p className="font-bold">
                Available Seats:{" "}
                <span className="text-orange-400">{availableSeats}</span>
              </p>
            </div>
            <div>
              <p className="font-bold">
                Price:
                <span className="text-orange-400"> ${price}</span>
              </p>
            </div>
          </div>
          <div className="card-actions mt-4">
            {availableSeats === 0 ? (
              <>
                <button
                  disabled={availableSeats === 0}
                  onClick={() => addToClass(classData)}
                  className="btn bg-slate-600 text-white font-bold">
                  Select
                </button>
              </>
            ) : (
              <>
                <button
                  disabled={disabled}
                  onClick={() => addToClass(classData)}
                  className="btn bg-slate-600 text-white font-bold">
                  Select
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
