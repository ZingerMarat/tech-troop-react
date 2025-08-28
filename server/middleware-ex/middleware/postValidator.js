import Ajv from "ajv"
import postSchema from "../model/postSchema.js"

const ajv = new Ajv()

const validatePost = ajv.compile(postSchema)

export default validatePost
