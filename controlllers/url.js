const shortid= require("shortid");
// requiring db
const URL = require("../models/url")

async function handleGenerateNewShortUrl(req,res){

    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is required"});
    shortID_nano=shortid(); // NANO id of 8 length

    await URL.create({
        shortId:shortID_nano,
        redirectUrl:body.url,
        visitHistory:[]
    });

    return res.json({
        "sucess":"link shortened",
        "id":shortID_nano,
    })
}


module.exports={
    handleGenerateNewShortUrl,
    
}