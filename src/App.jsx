import { useState, useEffect } from "react"
import "./App.css"
import InputForm from "./components/InputForm.jsx"
import Notes from "./components/Notes.jsx"

function App() {
  const [notes, setNotes] = useState([])

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const deleteNote = (index) => {
    const afterDelete = notes.filter((_, i) => i !== index)
    setNotes(afterDelete)
  }

  // useEffect(() => {
  //   console.log("Notes changed:", notes)
  // }, [notes])

  return (
    <div className="view-area">
      <InputForm addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </div>
  )
}

export default App
