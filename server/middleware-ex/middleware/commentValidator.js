import { body, param } from "express-validator"

const validateComment = [
  param("postId").isInt({ min: 1 }).withMessage("postId must be a positive integer"),
  body("text").isString().isLength({ min: 3 }).withMessage("Text must be at least 3 chars long"),
]

export default validateComment
