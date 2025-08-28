export function validateContentType(req, res, next) {
  if (req.method === "POST") {
    const contentType = req.headers["content-type"]

    if (!contentType || !contentType.includes("application/json")) {
      return res.status(415).json({
        success: false,
        message: "Unsupported Media Type. Use application/json",
      })
    }
  }
  next()
}
