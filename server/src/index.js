const express = require('express');
const cors = require('cors');
const { registerAdmin } = require('./services/registerAdmin');
const { loginAdmin } = require('./services/loginAdmin');
const { createTopic } = require('./services/createTopic');



const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async(req, res) => {
    await registerAdmin(req, res);
});

app.post('/login', async(req, res) => {
    await loginAdmin(req, res);
});

app.post('/createTopic', async(req, res) => {
    await createTopic(req, res);
});
app.listen(2000);