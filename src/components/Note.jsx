function Note({ note, id, deleteNote }) {
  const convertDate = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const day = date.getDate()
    const month = months[date.getMonth()]

    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const ampm = hours >= 12 ? "PM" : "AM"

    hours = hours % 12
    hours = hours === 0 ? 12 : hours // 12 instead of 0

    return `${month} ${day} at ${hours}:${minutes} ${ampm}`
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(id)
    }
  }

  return (
    <div className="note">
      <div className="note-header">
        <div className="note-date">{convertDate(note.date)}</div>
        <div className="delete-note" onClick={() => handleDelete()}>
          ✖
        </div>
      </div>
      <div className="note-text">{note.text}</div>
    </div>
  )
}

export default Note
