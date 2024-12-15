import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [openModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add New Cabin
      </Button>
      {openModal && (
        <Modal closeModal={setIsOpenModal}>
          <CreateCabinForm closeModal={setIsOpenModal} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
