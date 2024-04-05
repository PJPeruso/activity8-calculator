function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch(operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if(num2 != 0) {
                result = num1 / num2;
            } else {
                alert("Cannot divide by zero");
                return;
            }
            break;
    }

    // Display the result
    var resultElement = document.getElementById('result');  
    resultElement.textContent = "Result: " + result;
    resultElement.style.textAlign = 'center'; // Align the result text to center
}
