const requests = new Map() // { ip -> { count, firstRequestTime } }

export function rateLimiter(req, res, next) {
  const ip = req.ip
  const now = Date.now()

  const windowSize = 60 * 1000 // 1 min
  const maxRequests = 10

  if (!requests.has(ip)) {
    requests.set(ip, { count: 1, firstRequestTime: now })
    return next()
  }

  const data = requests.get(ip)

  if (now - data.firstRequestTime < windowSize) {
    if (data.count >= maxRequests) {
      return res.status(429).json({
        success: false,
        message: "Too many requests, please try again later.",
      })
    }

    data.count++
    requests.set(ip, data)
    return next()
  } else {
    requests.set(ip, { count: 1, firstRequestTime: now })
    return next()
  }
}
