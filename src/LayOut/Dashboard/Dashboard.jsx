import { Link, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open pt-[68px]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu ps-8 text-white  text-lg p-4 w-80 h-full bg-black bg-opacity-60 pt-20 ">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/myselectedclass">My Selected Class</Link>
            </li>
            <li>
              <Link className="mt-4" to="/dashboard/myenrolledclass">
                My Enrolled Class
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
