import Note from "./Note.jsx"

function Notes({ notes, deleteNote }) {
  return (
    <div className="all-notes">
      {notes.map((n, index) => (
        <Note key={index} id={index} note={n} deleteNote={deleteNote} />
      ))}
    </div>
  )
}

export default Notes
