import Note from "./Note.jsx"

function Notes({ notes }) {
  return (
    <div className="all-notes">
      {notes.map((n, index) => (
        <Note key={index} note={n} />
      ))}
    </div>
  )
}

export default Notes
