import { addTodoAsync, deleteTodo, getTodos, toggleTodoAsync } from "../services/todoService.js";

let todos=[];

export async function createTodo(req, res, next) {
  try {
    const { title } = req.body;
    todos = await addTodoAsync(todos, title);
    res.status(201).json(todos);
  } catch (err) {
    res.status(500).json({message: "Server Error"});
  }
}

export function getAllTodos(req, res, next){
try {
    todos = getTodos(todos);
    res.json({todos});
} catch (error) {
    res.status(500).json({message: "Server Error"});
}
};

export async function toggle(req, res, next){
    try {
        const id = Number(req.params.id);
        console.log(id);
        todos = await toggleTodoAsync(todos, id);
        res.status(200).json({todos});
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

export function delTodo(req, res, next){
    try {
        const id = Number(req.params.id);
        todos = deleteTodo(todos, id);
        res.status(200).json({todos});
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}