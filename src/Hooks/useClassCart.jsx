import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClassCart = () => {
  const { user } = useAuth();

  const { refetch, data: classCart = [] } = useQuery({
    queryKey: ["class-carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/class-carts?email=${user?.email}`
      );
      return res.json();
    },
    // enabled: !!user && !loading,
    // queryFn: async () => {
    //   const res = await axiosSecure(`/carts?email=${user?.email}`);
    //   return res.data;
    // },
  });
  return [classCart, refetch];
};

export default useClassCart;
