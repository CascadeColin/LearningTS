// interface User {
//   readonly dbId: number;
//   email: string;
//   userId: number;
//   googleToken?: string;
//   // defines a method that returns a string
//   // startTrial: () => string
//   // OR
//   startTrial(): string;
//   // both syntax work

//   getCoupon(name: string, value: number): number;
// }

// // "reopening" the interface - this is contrived, this would only be done importing an interface from another file
// interface User {
//     githubToken: string
// }

// interface Admin extends User {
//     role: "admin" | "ta"
// }

// const myAdmin: Admin = {
//   dbId: 32489234,
//   email: "c@colin.com",
//   userId: 234,
//   role: "admin",
//   githubToken: "token",
//   startTrial: () => {
//     return "trial started";
//   },
//   getCoupon: (name: "10% off", discount: 10) => {
//     console.log(`Enjoy ${name}!`);
//     return discount;
//   },
// };
