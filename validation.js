// Validation Checking

// 01. Number Checking :

function multiply_(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {   // প্রধান লাইন
        return "Please provide a number."
    }
    const mult = num1 * num2;
    return mult;
}


const result__1 = multiply_(20, 5)
console.log(result__1)

const result__2 = multiply_(20 + 5, 2 + 3)
console.log(result__2)

// কি করতে হবে NaN ফিক্স করতে?
const result__3 = multiply_(5, 'seven');
console.log(result__3)  // NaN





// 02. String checking :

function fullName(first, second) {
    if (typeof first !== 'string') {
        return "First name should be a string❗"
    }
    else if (typeof second !== 'string') {
        return "Second name should be a string❗"
    }
    const full = first + ' ' + second;
    return full;
}

const full_1 = fullName('Bayjid', 'Alom')
const full_2 = fullName('Bayjid', 18)
// এটা এরর দিবে না , কিন্তু আমি string এর সাথে number চাই না.
// Only string allow?

console.log("Fullname O/P:(1) :", full_1)
console.log("Fullname O/P:(2) :", full_2)





// 03. Object checking :

function getPrice(product) {
    // console.log(typeof product)   // object
    if (typeof product !== 'object') {
        return "Please provide an array❗"
    }
    const price = product.price;
    return price;
}
const price = getPrice({ name: "ruller", price: 100, color: 'red' })
console.log(price)




// 04. Array Checking :  Array.isArray()
// Check : if it is not  an arry ---

function getSecond(numbers) {
    console.log("Is array ? ", Array.isArray(numbers))

    if (Array.isArray(numbers) === false) {
        return "Please provide an array [❗]"
    }

    console.log(typeof numbers);
    const second = numbers[1];
    return second;
}

const second = getSecond([10, 20, 30]);
console.log("Index [1] >", second)



