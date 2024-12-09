// Initialize a string to store the user input and calculations
let string = ""; 

// Select all button elements from the document
let buttons = document.querySelectorAll("button"); 

// Log all buttons to the console to check if they're selected correctly
console.log(buttons); 

// Convert the NodeList of buttons into an array and iterate over each button
Array.from(buttons).forEach((button) => {
    // Add an event listener to each button for a 'click' event
    button.addEventListener("click", (e) => {
        
        // Check if the clicked button is the "=" button (to evaluate the expression)
        if (e.target.innerHTML === "=") {
            try {
                // Use the eval function to evaluate the string (expression)
                string = eval(string);
                // Update the input field with the result of the evaluation
                document.querySelector("input").value = string;
            }
            catch (error) {
                // If there's an error (invalid expression), log it and reset the input field
                console.log(string + ' error');
                document.querySelector('input').value = string;
                string = ''; // Reset the string after error
            }
        }
        
        // Check if the clicked button is "x" (to delete the last character)
        else if (e.target.innerHTML === "x") {
            // Remove the last character from the string
            string = string.slice(0, -1);
            // Update the input field with the modified string
            document.querySelector("input").value = string;
        }

        // Check if the clicked button is "X" (to replace it with a multiplication symbol *)
        else if (e.target.innerHTML === "X") {
            // Add "*" to the string to represent multiplication
            string += '*';
            // Update the input field with the modified string
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML === "^") {
            // Add "*" to the string to represent multiplication
            string += '**';
            // Update the input field with the modified string
            document.querySelector("input").value = string;
        }

        // Check if the clicked button is "AC" (to clear the input)
        else if (e.target.innerHTML === "AC") {
            // Clear the console (useful for debugging)
            console.clear();
            // Reset the input field and the string
            document.querySelector('input').value = string;
            string = '';
        } 
        else {
            // If the button is neither "=" nor "x" nor "X" nor "AC", append the button's value to the string
            string += e.target.innerHTML;
            // Update the input field with the modified string
            document.querySelector('input').value = string;
        }
    });
});
