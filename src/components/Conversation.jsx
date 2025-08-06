function Conversation({ sender, convo, displayConvo }) {
  return (
    <>
      {convo.map((message, index) => (
        <div key={index}>
          <span className="sender">{message.sender === "self" ? "Me" : sender}</span>: {message.text}
        </div>
      ))}
      <button className="back" onClick={() => displayConvo(null)}>
        Back
      </button>
    </>
  )
}

export default Conversation
