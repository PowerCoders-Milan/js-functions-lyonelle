//define a function multiplyByNineFifths(number)
let number= Math.ceil(Math.random()*6)
function multiplyByNineFifths  (number)   {
    return number*(9/5)
};
console.log(multiplyByNineFifths(number) )
// // define a function getFahrenheit(celsius)
 function getFahrenheit (celsius) {
    return multiplyByNineFifths(number) + 32;
}

 // call getFahrenheit();
console.log(getFahrenheit(5))

// // do the same thing starting from Fahrenheit to Celsius
let numbers= Math.ceil(Math.random()*4)
function substrationMinusThirtyTwo(numbers){
    return ((numbers - 32)*5/9 )
}

 console.log(substrationMinusThirtyTwo(numbers))

// function getCelsius (fahrenheit) {
//     return(substrationMinusThirtyTwo) * 5/9
// }
// console.log(getCelsius(4))
