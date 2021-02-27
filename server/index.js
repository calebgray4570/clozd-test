import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/users', userRoutes);
app.get('/', (req, res) => res.send('Clozd test is running!'));

const PORT = 5000;

app.listen(PORT, () => {console.log(`Listening on port: http://localhost:${PORT} ✅`)})
