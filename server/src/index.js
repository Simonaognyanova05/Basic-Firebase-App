const express = require('express');
const cors = require('cors');
const { registerAdmin } = require('./services/registerAdmin');
const { loginAdmin } = require('./services/loginAdmin');
const { createTopic } = require('./services/createTopic');
const { getTopics } = require('./services/getTopics');
const { updateTopic } = require('./services/updateTopic');
const { deleteTopic } = require('./services/deleteTopic');



const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    await registerAdmin(req, res);
});

app.post('/login', async (req, res) => {
    await loginAdmin(req, res);
});

app.post('/createTopic', async (req, res) => {
    await createTopic(req, res);
});

app.get('/topics', async (req, res) => {
    let topics = await getTopics(req, res);
    return res.json(topics);
});

app.put('/topics/:topicId', async (req, res) => {
    await updateTopic(req, res);
});

app.delete('/topics/:topicId', async (req, res) => {
    await deleteTopic(req, res);
})
app.listen(2000);