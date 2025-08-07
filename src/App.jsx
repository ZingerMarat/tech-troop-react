import { useState, useEffect } from "react"
import "./App.css"
import InputForm from "./components/InputForm.jsx"
import Notes from "./components/Notes.jsx"
import Modal from "react-modal"

Modal.setAppElement("#root")

function App() {
  const [notes, setNotes] = useState([])

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const deleteNote = (index) => {
    const afterDelete = notes.filter((_, i) => i !== index)
    setNotes(afterDelete)
  }

  const updateNote = (index, updatedNote) => {
    setNotes((prevNotes) => prevNotes.map((note, i) => (i === index ? updatedNote : note)))
  }

  // useEffect(() => {
  //   console.log("Notes changed:", notes)
  // }, [notes])

  return (
    <div className="view-area">
      <InputForm addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  )
}

export default App
