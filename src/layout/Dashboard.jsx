import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
 



const Dashboard = () => {

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
             <ul>
             <li>
                    <NavLink className='flex items-center gap-2 justify-center py-2' to="/">
                        <FaHome className="text-xl"></FaHome>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center gap-2 justify-center py-2' to="/dashboard/users">
                        <FaUsers className="text-xl"></FaUsers>
                        All Users</NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center gap-2 justify-center py-2' to="/dashboard/employee">
                        <FaUsers className="text-xl"></FaUsers>
                        All Employee</NavLink>
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