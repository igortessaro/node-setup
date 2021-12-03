import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World v2' });
});

app.listen(3333);