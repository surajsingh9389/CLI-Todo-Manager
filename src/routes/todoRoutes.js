import express from "express"
import { createTodo, delTodo, getAllTodos, toggle } from "../controllers/todoController.js";
import { validateCreateTodo } from "../middleware/validateTodo.js";

const router = express.Router();

router.post('/', validateCreateTodo, createTodo);
router.get('/', getAllTodos);
router.patch('/:id', toggle);
router.delete('/:id', delTodo);

export default router;
