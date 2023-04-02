// string
let greetings: string = "hello world";
console.log(greetings);

// number - there is no 'int' and 'float', they are all 'number'
let userId: number = 8234234;

// boolean
let isLoggedIn: boolean = false;

// type interference - better practice
let myNum = 124;
myNum.toString() // valid
// myNum = "string" // error


// any - BAD PRACTICE, turns off type checking for variable
let hero; // infers as "any"

function getHero() {
    return "Thor";
}

hero = getHero(); // inferred as "any" - BAD

// better
let hero1: string;
let hero2: string;

function getHero1(){
    return "Thor";
}

function error() {
    return 1234
}

hero1 = getHero1(); // strictly a string
// hero2 = error(); // error: cannot assign number to a string

export {};