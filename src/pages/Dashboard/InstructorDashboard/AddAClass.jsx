import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddAClass = (data) => {
    console.log(data);
    const addClass = {
      className: data.className,
      price: Number(data.price),
      instructorName: data.instructorName,
      instructorEmail: data.instructorEmail,
      photoURL: data.photoURL,
      availableSeats: Number(data.availableSeats),
      status: "Pending",
    };
    console.log(addClass);

    axiosSecure.post("/add-a-class", addClass).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="bg-emerald-200 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 mt-8">
          Add A Class
        </h1>
        <form onSubmit={handleSubmit(handleAddAClass)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                {...register("instructorName", { required: true })}
                type="text"
                placeholder="Instructor Name"
                className="input input-bordered"
              />
              {errors.InstructorName && (
                <span className="text-red-500">
                  Instructor Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                defaultValue={user?.email}
                {...register("instructorEmail", { required: true })}
                type="email"
                placeholder="Instructor Email"
                className="input input-bordered"
              />
              {errors.InstructorEmail && (
                <span className="text-red-500">
                  Instructor Email is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <select
                {...register("className", { required: true })}
                className="input input-bordered">
                <option value="BasketballClass">Basketball Class</option>
                <option value="FootballClass">Football Class</option>
                <option value="BadmintonClass">Badminton Class</option>
                <option value="VolleyballClass">Volleyball Class</option>
                <option value="GolfClass">Golf Class</option>
                <option value="SwimmingClass">Swimming Class</option>
                <option value="BoxingClass">Boxing Class</option>
                <option value="TennisClass">Tennis Class</option>
              </select>
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input
                {...register("className", { required: true })}
                type="text"
                placeholder="Class Name"
                className="input input-bordered"
              />
              {errors.ClassName && (
                <span className="text-red-500">Class Name is required</span>
              )}
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-500">Price is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Photo URL</span>
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                placeholder="Class Photo URL"
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-500">
                  {" "}
                  Class Photo URL is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                {...register("availableSeats", { required: true })}
                type="text"
                placeholder="Available Seats"
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-500">
                  Available Seats is required
                </span>
              )}
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-teal-400"
              type="submit"
              value="Add A Class"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
