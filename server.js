const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT ||  3000;

app.use(express.json())

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});