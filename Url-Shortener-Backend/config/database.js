const mongoose = require("mongoose");
require("dotenv");

const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then( () => console.log("Connection with DB is Successfull."))
            .catch( (err) => {
                console.log("Some error occured while connection to DB.")
            });
};

module.exports = dbConnect;