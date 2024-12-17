import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "../../features/cabins/CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-forms">
        <Button>Add New Cabin</Button>
      </Modal.Open>

      <Modal.Window name="cabin-forms">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Display Table</Button>
      </Modal.Open>

      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [openModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add New Cabin
//       </Button>
//       {openModal && (
//         <Modal closeModal={setIsOpenModal}>
//           <CreateCabinForm closeModal={setIsOpenModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
