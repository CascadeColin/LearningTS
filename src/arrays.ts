// declares that superHeros gets an array that contains strings, and initializes it as an empty array
const superHeros: string[] = []
const heroPower: number[] = []
// does the exact same thing - syntactic sugar for people with an OOP language background
const altHeroPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = [];

const MLModels: number[][] = [
    [255,255,255],
    // '' // error, this is an array of arrays
    [], // legal, but bad practice
    // ["afsdf"] // error, array of arrays must only contain numbers
]

superHeros.push('ironman') // legal, ironman is a string
// superHeros.push(3) // error, array can only contain strings
// allUsers.push('') // error, not type User
allUsers.push({name: "Colin", isActive: true}) // legal, it matches type alias User

export {}