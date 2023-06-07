import { Link } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <>
      <Helmet>
        <title>Sports Talent Academy | SignIn</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> Sign Up now!</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK6I6t6DGqnps7-l2gU80fDVL8YIllzeXWK4iLD69Xg&s"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  defaultValue={"sports talent"}
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  defaultValue={"https://i.ibb.co/kJsr3fF/profile-3.png"}
                  type="text"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">photoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  defaultValue={"sports@gmail.com"}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  type="password"
                  defaultValue={"12Ss@@"}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Password must be less then 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password must be one upper case , one lower case , one
                    special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
                All Ready Have An Account?{" "}
                <Link className="font-bold text-orange-500" to="/login">
                  Login
                </Link>
              </small>
            </p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
