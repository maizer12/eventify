const userList = [
	{ name: 'ivan', password: 123456 },
	{ name: 'petro', password: 123456 },
	{ name: 'stipanov', password: 123456 },
	{ name: 'vovka', password: 123456 },
];

const UserListModel = {
	getAllUsers: () => {
		return userList;
	},
};

export default UserListModel;
