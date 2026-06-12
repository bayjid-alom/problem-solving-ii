/****
 ### Task -1: 
Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];
****/

function lowestNumber(numbers) {

    let minimum = numbers[0];
    for (const number of numbers) {
        if (number < minimum) {
            minimum = number;
        }
    }
    return minimum;
}


const heights = [167, 190, 120, 165, 137];
const lowest = lowestNumber(heights);
console.log("Lowest one is :", lowest)