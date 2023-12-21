const express = require('express');
const path = require('path');
const router = express.Router();

// Identifier of the device, if is either a phone or computer

const verifyToken = (req,res,next) => {
    return req.cookies.token;
}


router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/mainPage.html"));
})

router.get("/stargaze", (req, res) =>
{

    if (data)
    {
        res.sendFile(path.resolve(__dirname + "/../src/views/pagePhone.html"));
    }
    else
    {
        res.sendFile(path.resolve(__dirname + "/../src/views/pageComp.html"));
    }
})



module.exports = router;