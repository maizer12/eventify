import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LoginModel = {
	async login(data) {
		try {
			const filePath = path.join(__dirname, '..', 'db', 'users.json');
			const users = await fs.readFile(filePath, 'utf-8');
			const user = data.body;
			const allUsers = JSON.parse(users);
			const loginCheck = allUsers.filter(e => e.login === user.login);

			if (!!loginCheck.length && loginCheck[0].password === user.password) {
				return 'Authorization was successful.';
			}
			throw new Error('Invalid login or password. Please check and try again.');
		} catch (err) {
			console.error('Error reading file:', err);
			throw err;
		}
	},
};

export default LoginModel;
