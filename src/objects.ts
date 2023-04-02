// defines "pt" as an object that contains the properties "x" and "y"
// contrived example: y is defined as OPTIONAL with the ?: syntax
function printCoordinates(pt: { x: number; y?: number }) {
  console.log(`X Coord: ${pt.x}`);
  // undefined check is required because y is optional and may not be passed in.  JS returns this as "undefined" which can cause issues.
  if (pt.y !== undefined) {
    console.log(`Y Coord: ${pt.y}`);
  }
}
printCoordinates({ x: 3, y: 7 });
// printCoordinates({x:3, t:7}) // error, "t" is not defined
printCoordinates({ x: 3 }); // allowed because y is optional
// printCoordinates({y:3}) // error, "x" is missing

// closures: creates a function defined to return an object, with the object parameters being a "string" and a "number"
function createCourse(): { name: string; price: number } {
  return { name: "TS", price: 399 };
}

// creates an alias of a specific kind of object that is called User
// this ACTS like a datatype, but it is just an alias of an object
type User = {
  // sets _id as read only and it cannot be modified - useful for interfacing with databases
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  // optional, not all users have a credit card
  CCdetails?: number;
};

type ccNumber = {
  cardnumber: number;
};

type ccDate = {
  carddate: string;
};

// creates a type alias combining ccNumber, ccData, and a new object defined as "cvv" being a number
type cardDetails = ccNumber &
  ccDate & {
    cvv: number;
  };

// contrived example of aliasing a default datatype
type mystring = string;

let myUser: User = {
  _id: "1341234",
  name: "Colin",
  email: "cascade.colin@gmail.com",
  isActive: true,
};

myUser.email = "colin.marshall94@gmail.com";
// myUser._id = "dasfjlkaksldf" // error, _id is read only

// contribed, simulates getting _id from mongodb
const mongodb = "asdfasdf";

// defining the fn param to be type User and returning type User
function createUser(user: User): User {
  // returns a closure of the defined datatype 'User'
  //   return {
  //     _id: mongodb,
  //     name: "",
  //     email: "",
  //     isActive: true,
  //   };
  
  // better practice is to pass the parameter as it is already type User
  return user;
}

createUser({ _id: mongodb, name: "", email: "", isActive: true });

export {};
