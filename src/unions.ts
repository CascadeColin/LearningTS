// useful when incoming data type is not known, while avoiding "any"
// best practice:  keep is as strict as possible
// score defined as either a number OR string
let score: number | string = 33
score = 44
score = "55"
// score = true // error, not a string OR number



type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

// lets me be a user OR admin
let colin: User | Admin = {
    name: "Colin",
    id: 1234
}

// reassign colin to be Admin
colin = {username: "afsdlf", id: 52435}

// keep it as strictly typed as possible - have logic that handles both the number and string outcome
function getDbId(id: number | string): void {
    // id.toLowerCase() // error, TS defines "id" as being type "number | string" and toUpperCase() is a "string" method
    // legal because it verifies that id is a string in this context
    if (typeof id === 'string') {
        id.toLowerCase()
    }
}

getDbId(5)
getDbId("5") // both are legal


// arrays
const data: (string | number)[] = [1,2,3,"4"]

// protecting variables
// defines that airlineSeats can ONLY be "window, "middle", or "aisle"
let airlineSeats: "window" | "middle" | "aisle";

airlineSeats = "window" // legal, was part of the type definition
// airlineSeats = "pilot" // error, does not match type definition

export {}