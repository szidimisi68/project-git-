function getFirstElement (arr){
    return arr[0];
}

function factorial(szam){
    var valasz = 1;
    for (let index = 1; index < szam; index++) {
        valasz *= index;
        
    }
    return valasz;
}

const numbers = [1, 2, 3];
const words = ["apple", "banana", "cherry"];

console.log(`First number: ${getFirstElement(numbers)}`)
console.log(`First word: ${getFirstElement(words)}`)