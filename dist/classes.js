"use strict";
// CLASSES -> using OOP in TS
class User {
    // normal JS constructor, except for defining datatypes
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const colin = new User("colin@email.com", "Colin");
colin.city = "Seattle";
// however, there is nothing stopping the transpiled JS from doing something like "colin.city = 238942"
// can use the readonly keyword to prevent it from happening on the TS side - good if transpiling to dist/ which won't be touched by a human
class User2 {
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}
const newUser = new User2("test@test.com", "Andrew", "Portland");
// newUser.email = "new@email.com" // error, variable is readonly
// PRIVATE VARIABLES and better practices
class User3 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // defined as public by default, not necessary to define in
        // protected -> accessible in User3 and any subclasses
        this._courseCount = 1;
        // private -> only accessible inside of this class
        this.city = "Seattle";
    }
    // methods can be private as well
    deleteToken() {
        console.log("Token Deleted");
    }
    get getGmail() {
        return `gmail: ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setters cannot have ANY specified return type, including void
    set courseCount(courseNum) {
        if (courseNum < 1) {
            throw new Error("course count should be 1 or higher");
        }
        this._courseCount = courseNum;
    }
}
// using inheritance to extend User class
// SubUser does not get private variables from User!
// must use "protected" to expose variables to classes that inherit User3
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
}
const newUser1 = new User3("email@email.com", "peter", "asdf879fakf");
