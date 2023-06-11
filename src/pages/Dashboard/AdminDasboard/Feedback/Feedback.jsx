import { useForm } from "react-hook-form";

const Feedback = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSendFeedback = (data) => {
    // event.preventDefault();
    // const form = event.target;
    // const feedback = form.feedback.value;
    console.log(data);
    reset();
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
          {errors.email && (
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
