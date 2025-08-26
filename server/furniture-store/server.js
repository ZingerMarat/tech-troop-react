import express from "express"

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
]

const app = express()

app.get("/", (req, res) => {
  console.log("get")
})

app.get("/priceCheck/:name", (req, res) => {
  const item = store.find((i) => i.name === req.params.name)
  if (!item) {
    res.status(404).json({ price: null })
    return
  }

  res.status(200).json({ price: item.price })
})

app.listen(3000, () => {
  console.log("Server is up and running smoothly")
})
