const express = require('express');
const cors = require('cors');
const Swal = require('sweetalert2')

const app = express();
const port = process.env.PORT ||  3000;
app.use(express.json())

app.use(express.static('./src'));
app.use('/styles', express.static('styles'))
app.use('/scripts', express.static('scripts'))
app.use('/assets', express.static('assets'))
app.use('/controllers', express.static('controllers'))

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

const router = require('./routes/router.js');

app.use('/', router);

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});