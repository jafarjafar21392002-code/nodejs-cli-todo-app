const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function showMenu() {

    console.log("=== TODO APP ===");
    console.log("1. Add Task");
    console.log("2. Show Tasks");
    console.log("3. Exit");

    rl.question("Choose an option: ", function(choice) {

        if (choice === "1") {

            rl.question("What is your task? ", function(answer) {

                tasks.push(answer);

                console.log("Task added!");

                showMenu();
            });

        } else if (choice === "2") {

            console.log("Tasks:");

            for (let i = 0; i < tasks.length; i++) {
                console.log("Task " + (i + 1) + ": " + tasks[i]);
            }

            showMenu();

        } else if (choice === "3") {

            console.log("Goodbye!");
            rl.close();

        } else {

            console.log("Invalid choice!");
            showMenu();
        }
    });
}

showMenu();