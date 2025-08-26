import express from "express"

const users = {
  tilda: "You've done a wonderful job",
  riva: "You need to improve your form, but good perseverance",
  jeremy: "You're incredible",
}

const app = express()

app.get("/", (req, res) => {
  console.log("Hiiiii")
  res.send("bye")
})

app.get("/users/:id", (req, res) => {
  res.send(users[req.params.id])
})

app.get("/details", (req, res) => {
  const query = req.query
  console.log(query.city)

  res.send(query)
})

app.listen(3000, () => {
  console.log("Running server on port 3000")
})
