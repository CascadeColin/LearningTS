"use strict";
const score = [];
const names = [];
// simpler, but only allows for numbers and strings.  conforms to TS pattern of strict typing but is not a flexible function
function identityOne(val) {
    if (typeof val === "string")
        return val; // as a string
    return val; // as a number
}
// bad, don't use any unless there is no choice
function identityTwo(val) {
    return val; // as any datatype, bad practice don't use unless there's no choice
}
// good, but we can do better...
// Type's datatype gets stored on function call.  if Type is a number, then val must be a number and return must be a number.
function identityThree(val) {
    return val; // if Type is a number, then val must be a number and return must be a number.
}
// Popular shorthand of identityThree, but can also pass in custom datatypes (interfaces, types, tuples, unions, etc).  See example below
function identityFour(val) {
    console.log(val);
    return val;
}
// passing interface into identityFour, returning and consolelogging a Bottle interface
identityFour({
    brand: "Coors",
    type: "beer",
    id: 32412,
});
/* using arrays as parameters for generics */
// "T" return type is an index of the array being inputted, in this case.  must return an index of products
function getProducts(products) {
    // database logic and operations
    const myIndex = 3;
    return products[myIndex];
}
// arrow function version for generics
// When working in React, use `<T,>` instead of `<T>` to differentiate generics from React components
const getMoreProducts = (products) => {
    // database logic and operations
    const myIndex = 6;
    console.log(products.length); // can use array methods because we are defining input as being an array of generic datatype
    return products[myIndex];
};
// initialize postgres to be a DB interface
const postgres = {
    connection: "http://127.0.0.1/myDB",
    username: "user",
    password: "password123",
};
// can provide N number of values, using 2 in this case (T and U)
// sets up a generic where "T" can be any type, but "U" must be a DB interface
function connectDatabase(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
// typeof T === number, typeof U === DB interface, return is object (closure)
connectDatabase(3, postgres);
const quiz = {
    name: "interfaces",
    type: "exam",
};
const newCourse = {
    name: "TS 101",
    author: "Hitesh",
    subject: "CS",
    id: 1,
    quizzes: new Array(),
};
// add a quiz to the course
newCourse.quizzes.push(quiz);
console.log(newCourse.quizzes);
class CourseSale {
    constructor(cart = []) {
        this.cart = cart;
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const coursesForSale = new CourseSale();
// adds TS 101 to the cart
coursesForSale.addToCart(newCourse);
// logs the cart instance
console.log(coursesForSale);
