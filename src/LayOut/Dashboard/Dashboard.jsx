import { Link, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import { FaStore } from "react-icons/fa";
import useClassCart from "../../Hooks/useClassCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const Dashboard = () => {
  const [classCarts] = useClassCart();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open pt-[68px]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col m-12">
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

            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/manageclasses">Manage Classes</Link>
                </li>
                <li>
                  <Link className="mt-4" to="/dashboard/manageusers">
                    Manage Users
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link to="/dashboard/addaclass">Add A Class</Link>
                </li>
                <li>
                  <Link className="mt-4" to="/dashboard/myclasses ">
                    My Classes
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/myselectedclass">
                    <FaStore></FaStore> My Selected Class
                    <div className="badge badge-secondary">
                      +{classCarts?.length || 0}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="mt-4" to="/dashboard/myenrolledclass">
                    My Enrolled Class
                  </Link>
                </li>
                <li>
                  <Link className="mt-4" to="/dashboard/paymenthistory">
                    Payment History
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
