// syntax of (param: dataype) specifies that the param must be that datatype
// defining the function as "number" tells me that this function MUST return a number
function addTwo(num: number): number {
  return num + 2;
}

addTwo(5);
// addTwo('5') // error: must be a number

function getUpper(str: string) {
  return str.toUpperCase();
}

// getUpper(5) // error
getUpper("colin");

function userSignup(name: string, email: string, isPaid: boolean) {}
userSignup("Colin", "cascade.colin@gmail.com", true);

// default values
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("h", "colin@colin.com");

// scenario where more than 1 datatype can be returned
function getValue(myVal: number) {
  if (myVal > 5) return true;
  return "200 OK";
}

// must return a string - "void" used if there is nothing to return
const getHello = (str: string): string => {
    return ''
};

// const heros = ['thor', 'ironman', 'superman']
const heros = [1,2,3]

// TS can infer the datatype of the array based on its contents
heros.map((hero): string => {
    // will convert the datatype to string if it is not a string before
    return `Hero name: ${hero}`
    // return 2; // error
})

// declare functions as type "void" if there will be no return statement
function consoleErr(err: string): void {
    console.log(err);
    // return 1; // error, function is type void
}

// declare functions as "never" for error handling - declares that the function should NEVER return ANYTHING, and are used for gracefully throwing errors
function handleErr(err: string): never {
    throw new Error(err);
}

export {};
