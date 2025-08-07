import { useState } from "react"
import TextareaAutosize from "react-textarea-autosize"

const categories = [
  { value: "general", label: "General" },
  { value: "personal", label: "Personal" },
  { value: "work", label: "Work" },
  { value: "ideas", label: "Ideas" },
  { value: "study", label: "Study" },
]

function InputForm({ addNote, nodeToUpdate, updateNote, closeModal }) {
  const defaultNote = { title: "", text: "", date: "", category: categories[0].value }

  const [newNote, setNewNote] = useState(nodeToUpdate ? nodeToUpdate : defaultNote)

  const [selectedCategory, setSelectedCategory] = useState(nodeToUpdate?.category || categories[0].value)

  const inputTextHandler = (input) => {
    setNewNote((prev) => ({ ...prev, text: input }))
  }

  const inputTitleHandler = (input) => {
    setNewNote((prev) => ({ ...prev, title: input }))
  }

  const handleCategoryChange = (value) => {
    setSelectedCategory(value)
  }

  const handleClick = () => {
    const noteWithDateAndCategory = {
      ...newNote,
      category: selectedCategory,
      date: new Date(),
    }

    if (nodeToUpdate) {
      updateNote(nodeToUpdate.index, noteWithDateAndCategory)
      closeModal()
    } else {
      if (newNote.text.trim()) {
        addNote(noteWithDateAndCategory)
        setNewNote(defaultNote)
        setSelectedCategory(categories[0].value)
      }
    }
  }

  return (
    <div className="input-form">
      <div className="input-header">
        <input className="input-title" placeholder="Title" value={newNote.title} onChange={(e) => inputTitleHandler(e.target.value)}></input>
        <select className="input-category" id="category-select" value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="" disabled>
            -- Choose a category --
          </option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>
      <TextareaAutosize className="input-area" minRows={1} placeholder="A new note..." value={newNote.text} onChange={(e) => inputTextHandler(e.target.value)} />
      <button className="input-btn" onClick={() => handleClick()}>
        {nodeToUpdate ? "Update" : "Add"}
      </button>
    </div>
  )
}

export default InputForm
