

let input = prompt("what would you want to do?");
const todos = ['reading', 'hiking'];
while (input !== "quit") {

    if (input === "list") {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`)
        }
    }
    else if (input === "new") {
        const newTodo = prompt("please enter your new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }
    else if (input === "delete") {
        const index = parseInt(prompt("enter index to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]} !`);
        } else {
            console.log('unknown input');
        }
    }
    input = prompt('waht you want to do?')
}
console.log("successfully quited")