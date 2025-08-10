import { useState } from "react"
import Note from "./Note.jsx"
import Modal from "react-modal"
import ModalWindow from "./ModalWindow.jsx"

function Notes({ notes, deleteNote, updateNote }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [noteToShow, setNoteToShow] = useState(null)

  const openModal = (note, index) => {
    setIsModalOpen(true)
    setNoteToShow({ ...note, index })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setNoteToShow(null)
  }

  return (
    <div className="all-notes">
      {notes.map((n, index) => (
        <div key={index} onClick={() => openModal(n, index)}>
          <Note id={index} note={n} deleteNote={deleteNote} />
        </div>
      ))}

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Note Info" className="modal" overlayClassName="modal-overlay">
        <>{noteToShow && <ModalWindow note={noteToShow} closeModal={closeModal} updateNote={updateNote} />}</>
      </Modal>
    </div>
  )
}

export default Notes
