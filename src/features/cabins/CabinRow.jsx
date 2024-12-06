import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

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
  const { name, regularPrice, img, discount, maxCapacity } = cabin;
  return (
    <TableRow role="row">
      <img src={img} />
      <div>{name}</div>
      <div>Fits upto {maxCapacity} guests</div>
      <div>{formatCurrency(regularPrice)}</div>
      <div>{formatCurrency(discount)}</div>

      <Button>Delete</Button>
    </TableRow>
  );
}

export default CabinRow;
