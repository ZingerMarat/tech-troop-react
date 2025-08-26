import { useState } from "react"

import "./App.css"
import CurrentTime from "./components/CurrentTime.jsx"
import PostsLoader from "./components/PostsLoader.jsx"

function App() {
  return (
    <>
      {/* <CurrentTime /> */}
      <PostsLoader />
    </>
  )
}

export default App
