console.log("Hello node js")
const dotenv = require("dotenv");
dotenv.config();
//stop executing code when certain condition met
// for (let i = 0; i <= 10; i++){
//     if (i == 5) {
//         process.exit()
//     }
//     console.log(i);
// }

// accessing env variables
let language = process.env.LANGUAGE;
console.log(language);