import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteCabin(cabin) {
  const queryClient = useQueryClient();
  const { name } = cabin;

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabins(id),
    onSuccess: () => {
      toast.success(`Cabin ${name} successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, mutate };
}

export default useDeleteCabin;
