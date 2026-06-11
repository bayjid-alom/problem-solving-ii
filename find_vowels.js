
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




