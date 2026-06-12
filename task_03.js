/****
 ### Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required.   ****/

function calculateElectronicsBudget(laptopsQuantity, tabletsQuantity, mobilesQuantity) {
    const perLaptopPrice = 35000;
    const perTabletPrice = 15000;
    const perMobilePrice = 20000;

    const totalLaptopPrice = perLaptopPrice * laptopsQuantity;
    const totalTabletPrice = perTabletPrice * tabletsQuantity;
    const totalMobilePrice = perMobilePrice * mobilesQuantity;

    const total_cost = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return total_cost;
}

const products_quantity = calculateElectronicsBudget(1, 2, 3);
console.log("Total Money Required :", products_quantity, "TK")