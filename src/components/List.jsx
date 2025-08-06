import Contact from "./Contact.jsx"

function List({ contacts, displayConvo }) {
  return (
    <>
      {contacts.map((item, index) => (
        <Contact key={index} contact={item} displayConvo={displayConvo} />
      ))}
    </>
  )
}

export default List
