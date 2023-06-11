import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const { id } = useParams();
  // console.log("id", id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSendFeedback = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/manage-feedback/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback: data.feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          // setDisable(true);
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Send Feedback",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="px-24 bg-slate-400 h-full">
      <h1 className="mb-12 mt-8 text-white font-bold text-2xl text-center">
        Write your feedback here
      </h1>
      <form onSubmit={handleSubmit(handleSendFeedback)}>
        <div>
          <textarea
            {...register("feedback", { required: true })}
            name="feedback"
            id=""
            cols="90"
            rows="10"></textarea>
          {errors.feedback && (
            <span className="text-red-500">Text Field is required</span>
          )}
        </div>
        <div>
          <input
            className="text white btn btn-warning font-bold mt-4"
            type="submit"
            value="Send Feedback"
          />
        </div>
      </form>
    </div>
  );
};

export default Feedback;
