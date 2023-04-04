const score: Array<number> = [];
const names: Array<string> = [];

// simpler, but only allows for numbers and strings.  conforms to TS pattern of strict typing but is not a flexible function
function identityOne(val: number | string): number | string {
  if (typeof val === "string") return val; // as a string
  return val; // as a number
}

// bad, don't use any unless there is no choice
function identityTwo(val: any): any {
  return val; // as any datatype, bad practice don't use unless there's no choice
}

// good, but we can do better...
// Type's datatype gets stored on function call.  if Type is a number, then val must be a number and return must be a number.
function identityThree<Type>(val: Type): Type {
  return val; // if Type is a number, then val must be a number and return must be a number.
}

// Popular shorthand of identityThree, but can also pass in custom datatypes (interfaces, types, tuples, unions, etc).  See example below
function identityFour<T>(val: T): T {
  console.log(val);
  return val;
}

// new interface
interface Bottle {
  brand: string;
  type: string;
  id: number;
}

// passing interface into identityFour, returning and consolelogging a Bottle interface
identityFour<Bottle>({
  brand: "Coors",
  type: "beer",
  id: 32412,
});

/* using arrays as parameters for generics */

// "T" return type is an index of the array being inputted, in this case.  must return an index of products
function getProducts<T>(products: T[]): T {
  // database logic and operations
  const myIndex = 3;
  return products[myIndex];
}

// arrow function version for generics
// When working in React, use `<T,>` instead of `<T>` to differentiate generics from React components
const getMoreProducts = <T>(products: T[]): T => {
  // database logic and operations
  const myIndex = 6;
  console.log(products.length); // can use array methods because we are defining input as being an array of generic datatype
  return products[myIndex];
};

// using multiple parameters and strictly setting individual params as a specific datatype
// declare a DB interface
interface DB {
  connection: string;
  username: string;
  password: string;
}

// initialize postgres to be a DB interface
const postgres: DB = {
  connection: "http://127.0.0.1/myDB",
  username: "user",
  password: "password123",
};

// can provide N number of values, using 2 in this case (T and U)
// sets up a generic where "T" can be any type, but "U" must be a DB interface
function connectDatabase<T, U extends DB>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// typeof T === number, typeof U === DB interface, return is object (closure)
connectDatabase(3, postgres);

/* GENERIC CLASSES */
interface Quiz {
  name: string;
  type: string;
}

const quiz: Quiz = {
  name: "interfaces",
  type: "exam",
};

interface Course {
  name: string;
  author: string;
  subject: string;
  id: number;
  quizzes: Quiz[];
}

const newCourse: Course = {
  name: "TS 101",
  author: "Hitesh",
  subject: "CS",
  id: 1,
  quizzes: new Array<Quiz>(),
};

// add a quiz to the course
newCourse.quizzes.push(quiz);
console.log(newCourse.quizzes);

class CourseSale<T> {
  constructor(public cart: T[] = []) {}
  addToCart(product: T) {
    this.cart.push(product);
  }
}

const coursesForSale = new CourseSale();

// adds TS 101 to the cart
coursesForSale.addToCart(newCourse);

// logs the cart instance
console.log(coursesForSale);
