import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <div>
      <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-xl cursor-pointer">
        <FcGoogle size={32} />

        <p className="font-bold">Continue with Google</p>
      </div>
    </div>
  );
};

export default GoogleLogin;
