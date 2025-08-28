let count = 0

export function counter(req, res, next) {
  count++
  req.requestCount = count

  next()
}
