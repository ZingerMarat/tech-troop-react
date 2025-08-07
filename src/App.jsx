import { useState, useEffect } from "react"
import "./App.css"
import InputForm from "./components/InputForm.jsx"
import Notes from "./components/Notes.jsx"

function App() {
  const [notes, setNotes] = useState([{ text: "test", date: "date" }])

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  // useEffect(() => {
  //   console.log("Notes changed:", notes)
  // }, [notes])

  return (
    <div className="view-area">
      <InputForm addNote={addNote} />
      <Notes notes={notes} />
    </div>
  )
}

export default App
