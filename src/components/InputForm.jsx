import { useState } from "react"
import TextareaAutosize from "react-textarea-autosize"

function InputForm({ addNote, nodeToUpdate, updateNote, closeModal }) {
  const [newNote, setNewNote] = useState(nodeToUpdate ? nodeToUpdate : { title: "", text: "", date: "" })

  const inputTextHandler = (input) => {
    setNewNote({ ...newNote, text: input, date: new Date() })
  }

  const inputTitleHandler = (input) => {
    setNewNote({ ...newNote, title: input, date: new Date() })
  }

  const handleClick = () => {
    if (nodeToUpdate) {
      updateNote(nodeToUpdate.index, newNote)
      closeModal()
    } else {
      if (newNote.text.trim()) {
        addNote(newNote)
        setNewNote({ title: "", text: "", date: "" })
      }
    }
  }

  return (
    <div className="input-form">
      <input className="input-title" placeholder="Title" value={newNote.title} onChange={(e) => inputTitleHandler(e.target.value)}></input>
      <TextareaAutosize className="input-area" minRows={1} placeholder="A new note..." value={newNote.text} onChange={(e) => inputTextHandler(e.target.value)} />
      <button className="input-btn" onClick={() => handleClick()}>
        {nodeToUpdate ? "Update" : "Add"}
      </button>
    </div>
  )
}

export default InputForm
