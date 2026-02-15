import readline from "readline";
import {getTodos, deleteTodo, addTodoAsync, toggleTodoAsync} from "./todoService.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todos = [];

function showMenu(){
    console.log(`
        ===== TODO CLI =====
        1. Add Todo
        2. List Todos
        3. Toggle Todo
        4. Delete Todo
        5. Exit
        `)
};


async function handleInput(choice) {
   try {

    switch(choice){
        case "1":
            rl.question("Enter todo title:", async (title) => {
                todos = await addTodoAsync(todos, title)
                console.log("Todo Added");
                showMenu();
            });

            break;

        case "2":
            console.table(getTodos(todos));
            showMenu();
            break;

        case "3":
            rl.question("Enter todo ID to toggle", async (id) =>{
                todos = await toggleTodoAsync(todos, Number(id));
                console.log("Todo updated")
                showMenu();
            })
            break;
        case "4":
            rl.question("Enter todo ID to delete: ", (id) => {
            todos = deleteTodo(todos, Number(id));
            console.log("Todo deleted");
            showMenu();
            });
            break;
        case "5":
            console.log("Goodbye!")   
            rl.close();
            break;
        
         default:
            console.log("Invalid choice");
            showMenu();   

    }
    
   } catch (error) {
      console.error("Error:", err.message);
      showMenu();
   }
    
}


export function startCLI() {
  showMenu();
  rl.on("line", handleInput);
}