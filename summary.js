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

function vowesCount(lines) {

    const words = lines.split("")
    let count = 0;

    for (let letter of words) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
            count++;
        }
    }
    return count;
}

const str = vowesCount("I am learning web Programming")
console.log("Vowel total: ", str)


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