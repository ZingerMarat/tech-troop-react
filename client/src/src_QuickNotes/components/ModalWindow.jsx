import InputForm from "./InputForm.jsx"

function ModalWindow({ note, closeModal, updateNote }) {
  return (
    <div className="modal-content">
      <InputForm nodeToUpdate={note} closeModal={closeModal} updateNote={updateNote} />
    </div>
  )
}

export default ModalWindow
