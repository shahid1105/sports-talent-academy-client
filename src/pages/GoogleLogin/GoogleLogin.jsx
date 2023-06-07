import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <div>
      <div className="p-4">
        <div className="divider"></div>
        <div className="border-4 border-gray-400 hover:bg-primary rounded-2xl">
          <div className="text-center px-4 flex items-center gap-4">
            <button className="btn btn-circle btn-outline">
              <FcGoogle></FcGoogle>
            </button>
            <p className="font-bold text-red-600">Login With Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
