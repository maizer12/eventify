import LoginModel from '../models/LoginModel.js';

const LoginController = {
	async post(req, res) {
		try {
			const answer = await LoginModel.login(req);
			res.send(answer);
		} catch (err) {
			res.status(401).send(err.message);
		}
	},
};

export default LoginController;
