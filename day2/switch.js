// Prompt the user to enter the day
var userinput = prompt("Enter the day: ").toLowerCase();
console.log("Day Activity");  // Convert input to lowercase for case-insensitivity

// Switch statement to check the entered day
switch(userinput) {
    case "monday":
    case "tuesday":
        console.log("Football");  
        break;

    case "wednesday":
    case "thursday":
        console.log("Cricket");
        break;

    case "friday":
        console.log("Volleyball");
        break;

    case "saturday":
        console.log("Basketball");
        break;

    case "sunday":
        console.log("Holiday");
        break;

    default:
        console.log("Enter a valid day");
}
