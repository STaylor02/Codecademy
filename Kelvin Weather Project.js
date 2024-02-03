//Keeps kelvin at a constant
const kelvin = 0;

//converts kelvin to celsius
var celsius = kelvin - 273;

//converts celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;

//rounds the number to a whole
Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);