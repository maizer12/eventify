import UserListModel from '../models/UserListModel.js';

const UserListController = {
	get: (req, res) => {
		const allUser = UserListModel.getAllUsers();
		res.json(allUser);
	},
};

export default UserListController;
