const express = require('express');
const path = require('path');
const router = express.Router();


// Identifier of the device, if is either a phone or computer

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../src/views/mainPage.html"));
})

router.get('/stargazeC', (req, res) =>
{
    res.sendFile(path.resolve(__dirname + "/../src/views/pageComp.html"));
})
router.get('/stargazeM', (req, res) =>
{
    res.sendFile(path.resolve(__dirname + "/../src/views/pagePhone.html"));
})






module.exports = router;