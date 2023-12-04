import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            // console.log('asking or checking is admin', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
// import axios from "axios";


// const useAdmin = () => {
//     const { user, loading } = useAuth();
//     const axiosSecure = useAxiosSecure();
//     const { data: isAdmin, isPending: isAdminLoading } = useQuery({
//         queryKey: [user?.email, 'isAdmin'],
//         // enabled: !!user?.email,
//         queryFn: async () => {
//             console.log('asking or checking is admin', user)
//             const token = localStorage.getItem('access-token')
//             // console.log('request stopped by interceptors', token)
//             // config.headers.authorization = `Bearer ${token}`;
//             const res = await axios.get(`http://localhost:5000/users/admin/${user.email}`,{
//                 headers:{
//                     authorization:`Bearer ${token}`
//                 }
//             });
//             console.log('uiouidjfd',res.data);
//             return res.data?.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// };

// export default useAdmin;
