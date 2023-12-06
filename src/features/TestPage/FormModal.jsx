import { Button, Modal } from "antd";
import { useState } from "react";
import TestingForm from "./TestingForm";

export default function FormAndButton() {
  const [isModalAdd, setIsModalAdd] = useState(false);
  const showModalTaoDon = () => {
    setIsModalAdd(true);
  };

  const closeAddModal = () => {
    setIsModalAdd(false);
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <Button onClick={showModalTaoDon}>Click to open modal</Button>

      <Modal
        open={isModalAdd}
        footer={null}
        onCancel={closeAddModal}
        title="Testing Modal"
        width={700}
      >
        <TestingForm></TestingForm>
      </Modal>
    </div>
  );
}
