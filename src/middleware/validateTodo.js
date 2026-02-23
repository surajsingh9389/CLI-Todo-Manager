export function validateCreateTodo(req, res, next) {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    const error = new Error("Title is required");
    error.status = 400;
    throw error;
  }

  next();
}