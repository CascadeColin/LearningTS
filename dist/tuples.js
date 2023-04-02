"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tuples are useful for API calls, among other things
// const user: (string | number)[] = ["CM", 1]
let user;
user = ["CM", 4321, true];
// let rgb: [number, number, number] = [255, 152, 122, 0.5];  // error, opacity not allowed in Tuple declaration
let rgb = [255, 152, 122, 0.5];
const newUser = [34, "email@google.com"];
newUser[1] = "newString";
newUser.push(324); // legal, but really shouldn't be and very controversial.  big limiting factor in using tuples
console.log(newUser); // [ 34, 'newString', 324 ], which defeats the purpose of using a tuple.
