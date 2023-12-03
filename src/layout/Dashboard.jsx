import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import useAdmin from './../Hooks/useAdmin';
import useHR from "../Hooks/useHR";
 



const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isHR] = useHR();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
             <ul>

            {
                isAdmin &&<>
                <li>
                    <NavLink className='flex items-center gap-2 justify-center py-2' to="/dashboard">
                        <FaHome className="text-xl"></FaHome>
                         Home</NavLink>
                </li>
                  <li>
                    <NavLink className='flex items-center gap-2 justify-center py-2' to="/dashboard/users">
                        <FaUsers className="text-xl"></FaUsers>
                        All Users</NavLink>
                </li>
                </>
                
            }

             {
                isHR && <>
                <li>
                    <NavLink className='flex items-center gap-2 justify-center py-2' to="/dashboard/employee">
                        <FaUsers className="text-xl"></FaUsers>
                        All Employee</NavLink>
                </li>
                </>
             }
              
              <li>
                    <NavLink className='flex items-center gap-2 justify-center py-2' to="/dashboard">
                        <FaHome className="text-xl"></FaHome>
                         Home</NavLink>
                </li>
             </ul>
            </div>
            <div className="flex-1 p-8">
             
                <Outlet></Outlet>
              
            </div>
        </div>
    );
};

export default Dashboard;