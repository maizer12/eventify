import express from 'express';
import cors from 'cors';
import userListRouter from './src/routes/UserList.js';
import authRouter from './src/routes/Auth.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/user-list', userListRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
