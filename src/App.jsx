import { useState, useEffect, useMemo } from "react"
import "./App.css"
import InputForm from "./components/InputForm.jsx"
import Notes from "./components/Notes.jsx"
import Modal from "react-modal"
import SearchBar from "./components/SearchBar.jsx"

Modal.setAppElement("#root")

function App() {
  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchCategory, setSearchCategory] = useState("")

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

  const filterNotes = (input, category) => {
    setSearchTerm(input)
    setSearchCategory(category)
  }

  const filteredNotes = useMemo(() => {
    const filteredByTerm = notes.filter((note) => note.text.toLowerCase().includes(searchTerm.toLowerCase()) || note.title.toLowerCase().includes(searchTerm.toLowerCase()))
    const filteredByCategory = searchCategory ? filteredByTerm.filter((note) => note.category === searchCategory) : filteredByTerm
    return filteredByCategory
  }, [searchTerm, notes, searchCategory])

  return (
    <div className="view-area">
      <InputForm addNote={addNote} />
      <SearchBar filterNotes={filterNotes} />
      <Notes notes={filteredNotes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  )
}

export default App
