import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClassCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: classCarts = [] } = useQuery({
    queryKey: ["class-carts", user?.email],

    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/class-carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [classCarts, refetch];
};

export default useClassCart;
