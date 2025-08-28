export function validateId(req, res, next) {
  if (req.params.id) {
    const validNumber = Number(req.params.id)

    if (Number.isNaN(validNumber)) {
      return next(new Error("invalid ID format"))
    }

    next()
  } else {
    return next(new Error("No ID provided"))
  }
}
