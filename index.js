const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require("body-parser");
const helmet = require('helmet');
const authRouter = require("./routers/authRouter");
const dashboardRouter = require("./routers/dashboardRouter");

const whitelistOrigins = ['http://localhost:3000'];
const port = process.env.PORT


// app.use(passport.session())
var corsOptions = {
    origin: whitelistOrigins,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
};
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(cors());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(helmet());
cors({
    origin: [
    "*"],
    credentials: true,
    exposedHeaders: ['Access-Control-Allow-Origin', 'Vary', 'Content-Length']
    })

// router imports


app.use("/auth", authRouter);
app.use("/api", dashboardRouter);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})