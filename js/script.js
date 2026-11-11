console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41

console.log(Math.round(111.2)); // 1
console.log(Math.round(167)); // 2

console.log(Math.pow(2, 5));

console.log(Math.random());
console.log((Math.random() * (10 - 1) + 1).toFixed(0));

// Using variables, we need to create a string with inserted values
// const guestName = "Mango";
// const roomNumber = 207;

// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";

// console.log(greeting); // "Welcome Mango, your room number is 207!"

const guestName = "Mango";
const roomNumber = 207;

const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;

console.log(greeting.toLowerCase()); // "Welcome Mango, your room number is 207!"
console.log(greeting.toUpperCase());

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";

const normalizedToUpperCaseInput = userInput.toLowerCase();

console.log(userInput); // "saMsUng"
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // "SAMSUNG"
console.log(normalizedToUpperCaseInput === BRAND_NAME.toLowerCase()); // true

const message = "Welcome to Bahamas to!";

console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1

const productName = "Repair Droid";
console.log(productName.length);

console.log(productName.includes("n")); // false
console.log(productName.includes("N")); // false
console.log(productName.includes("Droid")); // true
console.log(productName.includes("droid")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false

console.log(productName.slice(0, 5)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"

// const jsFileName = "script.js";

// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";

// console.log(cssFileName.endsWith(".js")); // false

const jsFileName = "script.js";

const minifiedJsFileName = jsFileName.replace(".js", ".min.js");

console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";

const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");

console.log(minifiedCssFileNames);
// "styles.min.css, about.min.css, portfolio.min.css"
