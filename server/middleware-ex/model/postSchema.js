const postSchema = {
  type: "object",
  properties: {
    title: { type: "string", minLength: 3 },
    content: { type: "string", minLength: 5 },
  },
  required: ["title", "content"],
  additionalProperties: false,
}

export default postSchema
