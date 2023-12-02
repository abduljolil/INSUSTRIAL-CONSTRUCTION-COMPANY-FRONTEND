import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { AiOutlineClose,AiOutlineCheck } from "react-icons/ai";

const AllEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Bank Account</th>
                            <th>Salary</th>
                            <th>Pay</th>
                            <th> Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    <div>
                                    <label className="swap text-3xl p-1 font-bold rounded-full border-[4px] ">
                                        <input type="checkbox" />
                                        <div className="swap-off"><AiOutlineClose /></div>
                                        <div className="swap-on"><AiOutlineCheck /></div>
                                    </label>
                                    </div>
                                </td>
                                {item.accountNumber}
                                <th>
                                    ${item.salary}
                                </th>
                                <th>
                                    <div>
                                    <button className="btn btn-outline btn-warning">Pay</button>
                                    </div>
                                </th>
                                <th>
                                    <Link to='/dashboard/employee/details'>Details</Link>
                                </th>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEmployee;