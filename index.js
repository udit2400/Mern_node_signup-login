const mongo = require("./database/connection");
//const user = require("./database/modals/user");
const router = require("./routes/index.route");
const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// console.log(user);
// console.log(mongo)
// console.log(userObject);
app.use("/", router);
const main = async() => {
    const connect = await mongo.connectToDB();

    // try {
    //     const userObject = new user({ "email": "uditkumawat7@gmail.com" });
    //     const useNewUrlParser = new user({
    //         _id: 1,
    //         name: "udit",
    //         year: 2020,
    //         email: "uditkumawat7@gmail.com",
    //         mobile_number: 8764020060,
    //         password: "uditudit",
    //     });
    //     const userData = await useNewUrlParser.save();
    //     console.log(userData);
    // } catch (error) {
    //     console.log(error.message);
    // }

};

main();

app.listen(process.env.PORT);
// server by express ***************************************

//const express = require("express");
//const app = express();

// app.get("/", (req, res) => {
//     res.send("hello");
// });




//*********************************************************** */

// const express = require('express')

// const app = express() // the main app
// const admin = express() // the sub app

// admin.get('/', (req, res) => {
//     console.log(admin.mountpath) // /admin
//     res.send('Admin Homepage')
// });
// app.listen(8080);

// app.use('/admin', admin) // mount the sub app