/****
### Task -2: 
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`  ****/


function smallestName(names) {

    let smallest = names[0];
    for (const name of names) {
        console.log(name)
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
}


const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const small_name = smallestName(names);
console.log("Smallest nam is :", small_name);