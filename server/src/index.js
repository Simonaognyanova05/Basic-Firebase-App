const express = require('express');
const cors = require('cors');
const { registerAdmin } = require('./services/registerAdmin');



const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async(req, res) => {
    await registerAdmin(req, res);
})
app.listen(2000);