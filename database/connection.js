const mongoose = require("mongoose");
exports.connectToDB = async() => {
    mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => {
            console.log("Connected");
        })
        .catch((err) => {
            console.log(err);
        });
};