import { useState } from "react"
import TextareaAutosize from "react-textarea-autosize"

function InputForm({ addNote }) {
  const [newNote, setNewNote] = useState({ title: "", text: "", date: "" })

  const inputTextHandler = (input) => {
    setNewNote({ ...newNote, text: input, date: new Date() })
  }

  const inputTitleHandler = (input) => {
    setNewNote({ ...newNote, title: input })
  }

  const handleClick = () => {
    if (newNote.text.trim()) {
      addNote(newNote)
      setNewNote({ title: "", text: "", date: "" })
    }
  }

  return (
    <div className="input-form">
      <input className="input-title" placeholder="Title" value={newNote.title} onChange={(e) => inputTitleHandler(e.target.value)}></input>
      <TextareaAutosize className="input-area" minRows={1} placeholder="A new note..." value={newNote.text} onChange={(e) => inputTextHandler(e.target.value)} />
      <button className="input-btn" onClick={() => handleClick()}>
        Add
      </button>
    </div>
  )
}

export default InputForm
