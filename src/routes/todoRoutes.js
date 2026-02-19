import express from "express"
import { createTodo, delTodo, getAllTodos, toggle } from "../controllers/todoController.js";

const router = express.Router();

router.post('/', createTodo);
router.get('/', getAllTodos);
router.patch('/:id', toggle);
router.delete('/:id', delTodo);

export default router;
