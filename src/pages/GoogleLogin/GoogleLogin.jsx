import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      const savedUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        image: loggedUser.photoURL,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-xl cursor-pointer">
        <FcGoogle size={32} />
        <p className="font-bold">Continue with Google</p>
      </div>
    </div>
  );
};

export default GoogleLogin;
