import http from 'http';
import express from 'express';
import { userRouter } from "./users/users.js"

const port = '9933'
const app = express();

app.get('/hello', (request, response) => {
    response.send('Privet')
})

app.use((req, res, next) => {
    console.log('Time is ', Date.now());
    next();
})

app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server started on https://localhost:${port}`);
})
