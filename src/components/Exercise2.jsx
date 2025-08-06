import { useState } from "react"
import List from "./List.jsx"
import Conversation from "./Conversation.jsx"

function Exercise2() {
  const [data, setData] = useState({
    displayConversation: null,
    conversations: [
      {
        with: "Laura",
        convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" },
        ],
      },
      {
        with: "Dad",
        convo: [
          { text: "Have you finished your school work yet?", sender: "other" },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" },
        ],
      },
      {
        with: "Shoobert",
        convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ],
      },
    ],
  })

  const displayConvo = (name) => {
    setData({ ...data, displayConversation: name })
  }

  return (
    <>
      {!data.displayConversation ? (
        <List contacts={data.conversations.map((item) => item.with)} displayConvo={displayConvo} />
      ) : (
        <Conversation sender={data.displayConversation} convo={data.conversations.find((item) => item.with === data.displayConversation).convo} displayConvo={displayConvo} />
      )}
    </>
  )
}

export default Exercise2
