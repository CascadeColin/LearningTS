"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// syntax of (param: dataype) specifies that the param must be that datatype
// defining the function as "number" tells me that this function MUST return a number
function addTwo(num) {
    return num + 2;
}
addTwo(5);
// addTwo('5') // error: must be a number
function getUpper(str) {
    return str.toUpperCase();
}
// getUpper(5) // error
getUpper("colin");
function userSignup(name, email, isPaid) { }
userSignup("Colin", "cascade.colin@gmail.com", true);
// default values
let loginUser = (name, email, isPaid = false) => { };
loginUser("h", "colin@colin.com");
// scenario where more than 1 datatype can be returned
function getValue(myVal) {
    if (myVal > 5)
        return true;
    return "200 OK";
}
// must return a string - "void" used if there is nothing to return
const getHello = (str) => {
    return '';
};
// const heros = ['thor', 'ironman', 'superman']
const heros = [1, 2, 3];
// TS can infer the datatype of the array based on its contents
heros.map((hero) => {
    // will convert the datatype to string if it is not a string before
    return `Hero name: ${hero}`;
    // return 2; // error
});
// declare functions as type "void" if there will be no return statement
function consoleErr(err) {
    console.log(err);
    // return 1; // error, function is type void
}
// declare functions as "never" for error handling - declares that the function should NEVER return ANYTHING, and are used for gracefully throwing errors
function handleErr(err) {
    throw new Error(err);
}
