// TYPE NARROWING: narrowing down the datatype in functions that accept multiple datatypes

// getting the ID from a database - may be a string or a number
// implied that input is either a number or a string that only contains 0-9
// needs to return a number
function getID(id: string | number): number {
  // if it's a number, return the number
  if (typeof id === "number") {
    return id;
  }
  // if it's a string, parse it to a number and return it.
  return parseInt(id);
}


// example of BAD CODE from TS docs
// does not handle the case of empty string because if only checks to see if strs is truthy.  
function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

/* See the docs for other types of narrowing - https://www.typescriptlang.org/docs/handbook/2/narrowing.html */

/* IN operator in type narrowing */
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    // toggle false to disable an admin, if necessary
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin): boolean {
    // checks for isAdmin key in interface, only exists in Admin so narrows the type down to Admin
    if ("isAdmin" in account) {
        // return the dynamic value in case the admin is not active
        return account.isAdmin;
    }
    // if not an admin, return false
    return false;
}