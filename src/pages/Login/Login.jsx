import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Sports Talent Academy | Login</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    defaultValue={"sports@gmail.com"}
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    defaultValue={"12Ss@@"}
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  {/* <label className="label">
                    <LoadCanvasTemplate />
                  </label> */}
                  {/* <input
                    onBlur={handleValidateCaptcha}
                    name="captcha"
                    type="text"
                    placeholder="type the captcha above"
                    className="input input-bordered"
                  /> */}
                  <p className="mt-8 border border-gray-300 text-blue-600 font-bold p-2 rounded-xl">
                    Click here to update captcha
                  </p>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="login"
                  />
                </div>
              </form>
              <p className="text-center">
                <small>
                  New Here?{" "}
                  <Link className="font-bold text-orange-500" to="/signUp">
                    Create A New Account
                  </Link>
                </small>
              </p>
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
