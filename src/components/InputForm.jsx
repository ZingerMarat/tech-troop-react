import { useState } from "react"
import TextareaAutosize from "react-textarea-autosize"

function InputForm({ addNote }) {
  const [newNote, setNewNote] = useState({ text: "", date: "" })

  const inputHandler = (input) => {
    setNewNote({ text: input, date: new Date() })
  }

  const handleClick = () => {
    if (newNote.text.trim()) {
      addNote(newNote)
      setNewNote({ text: "", date: "" })
    }
  }

  return (
    <div className="input-form">
      <TextareaAutosize className="input-area" minRows={1} placeholder="A new note..." value={newNote.text} onChange={(e) => inputHandler(e.target.value)} />
      <button className="input-btn" onClick={() => handleClick()}>
        Add
      </button>
    </div>
  )
}

export default InputForm
