console.log("✅ Find______out_______who will get the Straberry")

const disha = 76;
const jihad = 80;

if (disha > jihad) {
    console.log("Disha will get the Straberry.")
}
else {
    console.log("Jihad will get the Straberry.")
}


function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(20, 30);
const max2 = getMax(50, 100)
const ultimateMax = getMax(max1, max2)
console.log("Max of two is (Ultimate) :", ultimateMax)



// Max between three numbers (Jersy)
const shakib = 75;
const tamim = 28;
const mustafiz = 90;

if (shakib > tamim && shakib > mustafiz) {
    console.log("Max Number is : ", shakib)
}

else if (tamim > shakib && tamim > mustafiz) {
    console.log("Max Number is : ", tamim)
}
else {
    console.log("Max Number is : ", mustafiz)
}


// another way
const maximum = Math.max(10, 15, 20, 25, 30, 50);
console.log("Maximum is :", maximum);




console.log("✅ Tallest________number_______in an array");

// Tallest find out :

function findTallest(numbers) {

    let max = numbers[0];
    for (let number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;

}

const heights = [65, 66, 68, 72, 78, 60, 67, 80];
const tallest = findTallest(heights);
console.log("Tallest number of the array :", tallest)



console.log("✅ Calculate________Wood______Requirements");

/**
 # Chair --> 3 cft (cubic feet)
 # table --> 10 cft
 # bed --> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const furnitures = woodQuantity(6, 3, 4);
console.log("Total  Wood :", furnitures)
console.log("Total Wood Needed :", woodQuantity(2, 1, 1))



console.log("✅ Cheapest_______Phone____from an array of phone objects");
// array of array / array of object?
function getMin(numbers) {

    let cheapest = numbers[0];
    for (const number of numbers) {
        if (number < cheapest) {
            cheapest = number;
        }
    }
    return cheapest;
}

const prices = [20000, 15000, 50000, 19000, 75000, 85000];
const min = getMin(prices)
console.log("Cheapest one is :", min)


// Some tricky
// বিঃদ্রঃ এখানে আমরা মোবাইলের নেইমের মধ্যে তুলনা করতে পারবো না , তুলনা করার জন্য ডট নোটেশন দিয়ে মোবাইলের প্রাইজের সাথে তুলনা করতে হবে।


const mobiles = [
    { name: "Samsung", price: 20000, camera: "12MP", color: "black" },
    { name: "Xiaomi", price: 15000, camera: "12MP", color: "black" },
    { name: "Oppo", price: 27000, camera: "12MP", color: "black" },
    { name: "iPhone", price: 120000, camera: "12MP", color: "black" },
    { name: "Walton", price: 14500, camera: "12MP", color: "black" },
    { name: "HTC", price: 37000, camera: "12MP", color: "black" },
    { name: "Huawei", price: 45000, camera: "12MP", color: "black" }
]

function getCheapestPhone(phones) {

    let minimum = phones[0];
    for (const phone of phones) {
        if (phone.price < minimum.price) {  // প্রধান লাইন
            minimum = phone;
        }
    }
    return minimum;
}

const cheap = getCheapestPhone(mobiles);
console.log("Cheapest Phone is :", cheap)




console.log("✅ Calculate_______product_____total cost of products.");

const products = [
    { name: "Shapoo", price: 300, quantity: 5 },
    { name: "Shirt", price: 600, quantity: 2 },
    { name: "Pant", price: 700, quantity: 3 },
    { name: "Shoes", price: 1200, quantity: 1 }
]

function shoppingTotal(products) {

    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }

    return total;
}

const total = shoppingTotal(products);
console.log("Total Cost (Without quantity) :", total)


function cartTotal(products) {

    let total = 0;
    for (const product of products) {

        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }

    return total;
}

const shoppingCost = cartTotal(products);
console.log("Total Cost (With quantity) :", shoppingCost)   // 



console.log("✅ (Advanced}_______multi____layer discount price.");

/**** Normal Discount :
 upto 100: --> 100
 more than 101-200 --> 90
 more than 200 : --> 70
 ****/

function discountedPrice(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }

}

const total_ = discountedPrice(150);
console.log("Discount :", total)


/**** Layer discount :
 first 100 --> 100 Tk
 101 - 200 --> 90 Tk
 Above 200 --> 70 Tk
 ****/

function layerDiscountedPrice(quantity) {
    const first_100_price = 100;
    const second_100_price = 90;
    const above_200_price = 70;

    if (quantity <= 100) {
        const total = quantity * first_100_price;
        return total;
    }
    else if (quantity <= 200) {
        const first_100_Total = 100 * first_100_price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * 90;
        const total = first_100_Total + remainingTotal;
        return total;
    }
    else {
        const first_100_Total = 100 * first_100_price;
        const second_100_Total = 100 * second_100_price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = quantity * above_200_price;
        const total = first_100_Total + second_100_Total + remainingTotal;
        return total;
    }
}

const layer_total = layerDiscountedPrice(190);
console.log("Layer Discounted Price :", layer_total)



console.log("✅ Call_______function_________inside a function");

// # এটা আবার প্রাক্টিস করতে হবে ।

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

const result_1 = calculator(10, 5, 'add');
const result_2 = calculator(10, 5, 'subtract');
const result_3 = calculator(10, 5, 'multiply');
const result_4 = calculator(10, 5, 'divide');
console.log("Add:", result_1, "Subtract:", result_2, "Multiply:", result_3, "Divide:", result_4)




console.log("✅ Handle______Unexpected_____function input parameter Error");

/****
 # Validation
 ****/
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




console.log("✅ Summary________&____Practice Tasks");

/**** Fundamental Topics :
 * 01. variable
 * 02. Condition
 * 03. Array
 * 04. Loop
 * 05. Object
 * 06. Function
 * 
 * 
 *  # Practice more....
 *  # 
 */