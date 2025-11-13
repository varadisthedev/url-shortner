// @ts-check

const mongoose = require("mongoose");
const URLroute= require("./routes/url")
const {connectToMongoDb} = require("./connection.js");
const express = require("express");
const URL = require("./models/url.js");


const PORT = 8001;
const app = express();

//middleware to read and parse body
app.use(express.json());

connectToMongoDb("mongodb://127.0.0.1:27017/short-url")
.then(()=>{console.log(">>Connected to MongoDb")})
.catch(err=>{console.error(">>Could not connect to MongoDb, have you started mongosh?  ",err)});


app.use("/url",URLroute);

app.get("/:shortId",async (req,res)=>{
    const shortId=req.params.shortId;
    const Entry = await URL.findOneAndUpdate({
        shortId
    },
    {
        $push:{
        visitHistory:{
            timestamp:Date.now()
        },
    }}
);
res.redirect(Entry.redirectUrl);
});

// connection to mongoose
app.listen(PORT,()=>{
    console.log(`>>Server started at: http://localhost:${PORT}/`);
})