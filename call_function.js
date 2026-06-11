// # ফাংশনের ভিতরে ফাংশন কল । (a,b)
// # If this concept is not clear - debug it now!!

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === "add") {
        const result = add(a, b);
        return result;
    }

    else if (operation === "subtract") {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === "divide") {
        const result = divide(a, b);
        return result;
    }
    else if (operation === "multiply") {
        const result = multiply(a, b);
        return result;
    }

    else {
        return "Only 'add', 'subtract' , 'multiply', 'divide' operation is allowed."
    }
}

// এখান থেকে ডিবাগ চেক করুন ।
const result_1 = calculator(10, 5, 'add');
const result_2 = calculator(10, 5, 'subtract');
const result_3 = calculator(10, 5, 'multiply');
const result_4 = calculator(10, 5, 'divide');
console.log("Add:", result_1, "Subtract:", result_2, "Multiply:", result_3, "Divide:", result_4)
