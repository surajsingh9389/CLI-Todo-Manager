
// Todo Structure

// {
//     id: number,
//     title: string,
//     completed: boolean,
//     createdAt: number

// }

// I designed the todo system using pure functions and immutable updates.Business logic is synchronous and deterministic, while async wrappers simulate backend behavior like database latency. Errors are propagated instead of swallowed, which makes the service predictable and testable.

let todos = [];

// Not use global variable or object pass as arguments. make the function pure. use imutability concept
function addTodo(todos, title){
    const id = todos.length === 0 ? 1: todos[todos.length-1].id+1;
    return [...todos, {id, title, completed: false, createdAt: Date.now()}]
}

// for writting always be imutable and for reading you can be cheap
function getTodos(todos){
    return [...todos]
}


// if data object in object apply nested immutability to them also
function toggleTodo(todos, id){
  let flag = false;
  const newTodos = todos.map((todo) => {
    if(todo.id === id){
        flag = true;
        return {...todo, completed: !todo.completed
        }
    }
    return todo;
})

  if(!flag){
     throw new Error("id not found")
  }

  return newTodos;
}

// filter callback should return boolean 
function deleteTodo(todos, id) {
  const newTodos = todos.filter(todo => todo.id !== id);

  if (newTodos.length === todos.length) {
    throw new Error("Todo not found");
  }

  return newTodos;
}

// for simulate delay like backend you can use promise.
async function addTodoAsync(todos, title) {
     await new Promise(resolve => setTimeout(resolve, 300));
     return addTodo(todos, title);
}


// Never log-and-ignore errors in service functions.
// Either handle them OR throw them.

async function toggleTodoAsync(todos, id) {
    try{
      await new Promise(resolve => setTimeout(resolve, 300));
      return toggleTodo(todos, id);
    }catch(err){
        throw new Error(err.message)
    }
}

const res = addTodoAsync(todos, "JS")
res.then(todos => {return todos});
console.log();



