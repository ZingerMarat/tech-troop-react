import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { logger } from "./middleware/logging.js"
import { counter } from "./middleware/counting.js"
import { checkResourceExists } from "./middleware/checkResourceExists.js"
import { validateId } from "./middleware/validation.js"
import validatePost from "./middleware/postValidator.js"
import posts from "./db/posts.js"
import comments from "./db/comments.js"
import validateComment from "./middleware/commentValidator.js"
import { validationResult } from "express-validator"
import { rateLimiter } from "./middleware/rateLimiter.js"
import { validateContentType } from "./middleware/validateContentType.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, "dist")))

app.use(logger)
app.use(counter)
app.use(rateLimiter)
app.use(validateContentType)

app.get("/", (req, res) => {
  res.json({ message: "Welcome", requestCount: req.requestCount })
})

app.get("/about", (req, res) => {
  res.json({ message: "About", requestCount: req.requestCount })
})

app.get("/users/:id", validateId, checkResourceExists, (req, res) => {
  const userName = req.user.name
  res.json({ userName })
})

app.get("/posts", (req, res) => {
  res.status(200).json(posts)
})

app.post("/posts", (req, res) => {
  console.log(req.body)

  const valid = validatePost(req.body)

  if (!valid) {
    return res.status(400).json({ errors: validatePost.errors })
  }

  const newPost = {
    id: posts.length + 1,
    ...req.body,
  }

  posts.push(newPost)

  res.status(201).json(newPost)
})

app.post("/posts/:postId/comments", validateComment, (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const newComment = {
    id: comments.length + 1,
    postId: Number(req.params.postId),
    ...req.body,
  }
  comments.push(newComment)

  res.status(201).json(newComment)
})

app.listen(3000, () => {
  console.log("Server is up and running on port 3000")
})

app.get("/posts/:postId/comments", (req, res) => {
  const postId = Number(req.params.postId)
  if (Number.isNaN(postId)) {
    return res.status(400).json({ message: "invalid ID" })
  }
  const postComments = comments.filter((c) => c.postId === postId)

  res.json(postComments)
})

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  })
})
