function calculate() {
    // Get the values from the input fields (using .value to get the numeric input)
    const input1 = parseFloat(document.querySelector(".n1").value);
    const input2 = parseFloat(document.querySelector(".n2").value);

    // Check if the inputs are valid numbers
    if (!isNaN(input1) && !isNaN(input2)) {
        // Multiply the numbers
        const multiplay = input1 * input2;
        // Display the result in the result div
        document.querySelector(".result").textContent = "Bill: $" + multiplay;
    } else {
        // If the inputs are invalid, show an error message
        document.querySelector(".result").textContent = "Please enter valid numbers";
    }
}