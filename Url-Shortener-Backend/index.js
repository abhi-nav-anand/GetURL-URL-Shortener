const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const app = express();
var cors = require("cors");
const urlRoutes = require("./routes/urlsRoute");
const PORT = process.env.PORT || 4000;
const fnv = require('fnv-plus');


app.use( cors({origin: "*"}) );

app.use(express.json());
app.listen(PORT, () => {
    console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`)
});

dbConnect();

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is up and running."
    });
})

app.post("/test", (req, res) => {
    const seed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const short = fnv.fast1a32hex(req.body.url);
    res.status(200).json({
        short:short
    })
})

app.use("/", urlRoutes);