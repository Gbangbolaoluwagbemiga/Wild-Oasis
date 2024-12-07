import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { deleteCabins } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function CabinRow({ cabin }) {
  const { name, regularPrice, img, discount, maxCapacity, id } = cabin;
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabins(id),
    onSuccess: () => {
      toast.success(`Cabin ${name} successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <TableRow role="row">
      <img src={img} />
      <div>{name}</div>
      <div>Fits upto {maxCapacity} guests</div>
      <div>{formatCurrency(regularPrice)}</div>
      <div>{formatCurrency(discount)}</div>

      <button disabled={isDeleting} onClick={() => mutate(id)}>
        Delete
      </button>
    </TableRow>
  );
}

export default CabinRow;
