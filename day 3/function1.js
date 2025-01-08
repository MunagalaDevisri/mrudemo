function performOperation() {
    // Prompt user for input
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    
    // Prompt for operation choice
    const operation = prompt("Choose operation: 'add' for addition, 'subtract' for subtraction:");

    let result;

    // Check which operation to perform
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else {
        console.log("Invalid operation! Please enter 'add' or 'subtract'.");
        return;
    }

    // Display the result in the console
    console.log(`Result: ${result}`);
}

// Call the function
performOperation();
