import express from "express"

const app = express()

app.get("/", (req, res) => {
  console.log("get")
})

app.listen(3000, () => {
  console.log("Server is up and running smoothly")
})
