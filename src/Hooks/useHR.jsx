import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useHR = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isHR, isPending: isHRLoading } = useQuery({
        queryKey: [user?.email, 'isHR'],
        enabled: !loading,
        queryFn: async () => {
            // console.log('asking or checking is HR', user)
            const res = await axiosSecure.get(`/users/HR/${user.email}`);
            // console.log(res.data);
            return res.data?.HR;
        }
    })
    return [isHR, isHRLoading]
};

export default useHR;