const express = require("express");
const {handleGenerateNewShortUrl} = require("../controlllers/url")

const router = express.Router();
router.post('/',handleGenerateNewShortUrl);

module.exports=router;
