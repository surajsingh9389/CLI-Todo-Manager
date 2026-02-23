import { addTodoAsync, deleteTodo, getTodos, toggleTodoAsync } from "../services/todoService.js";

let todos=[];

export async function createTodo(req, res) {
    const { title } = req.body;
    todos = await addTodoAsync(todos, title);
    res.status(201).json(todos);
}

export function getAllTodos(req, res){
    todos = getTodos(todos);
    res.json({todos});
};

export async function toggle(req, res){
        const id = Number(req.params.id);
        todos = await toggleTodoAsync(todos, id);
        res.status(200).json({todos});
}

export function delTodo(req, res){
        const id = Number(req.params.id);
        todos = deleteTodo(todos, id);
        res.status(200).json({todos});
}