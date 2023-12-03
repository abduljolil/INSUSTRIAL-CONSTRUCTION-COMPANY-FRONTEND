import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { AiOutlineClose,AiOutlineCheck } from "react-icons/ai";
import Swal from "sweetalert2";

const AllEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
 
    const handleVerified = (item) => {
        axiosSecure.patch(`/users/${item._id}`, { status: 'verified' })
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} is now verified!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.error('Error updating user status:', error);
          });
      };
      
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
                                    {/* <label className="swap text-3xl p-1 font-bold rounded-full border-[4px] ">
                                        <input type="checkbox" />
                                      {  item.status === 'verified' ? <div className="swap-on"><AiOutlineCheck /></div>:
                                       <div onClick={()=>handleVerified(item)} className="swap-off"><AiOutlineClose /></div>
                                        }
                                    </label> */}
                                    {
                                        item.status === 'verified' ? <button className="text-3xl  btn btn-outline btn-warning  "><AiOutlineCheck /></button>:<button onClick={()=>handleVerified(item)} className="text-3xl btn btn-outline btn-warning  " ><AiOutlineClose /></button>
                                    }
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