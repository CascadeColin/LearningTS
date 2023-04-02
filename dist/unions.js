"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// useful when incoming data type is not known, while avoiding "any"
// best practice:  keep is as strict as possible
// score defined as either a number OR string
let score = 33;
score = 44;
score = "55";
// lets me be a user OR admin
let colin = {
    name: "Colin",
    id: 1234
};
// reassign colin to be Admin
colin = { username: "afsdlf", id: 52435 };
// keep it as strictly typed as possible - have logic that handles both the number and string outcome
function getDbId(id) {
    // id.toLowerCase() // error, TS defines "id" as being type "number | string" and toUpperCase() is a "string" method
    // legal because it verifies that id is a string in this context
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
getDbId(5);
getDbId("5"); // both are legal
// arrays
const data = [1, 2, 3, "4"];
// protecting variables
// defines that airlineSeats can ONLY be "window, "middle", or "aisle"
let airlineSeats;
airlineSeats = "window"; // legal, was part of the type definition
