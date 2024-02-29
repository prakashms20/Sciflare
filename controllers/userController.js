const UserModel = require('./../models/userModel');

// GET: Get all users
async function getUsers(req, res) {
    // res.json("users");
    try {
        const users = await UserModel.find().select('-password').populate('organization').exec();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST: Create a new user
// POST: Create a new user
async function createUser(req, res) {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// GET: Get users By id
async function getUserById(req, res) {
    try {
        const users = await UserModel.findById(req.params.id).select('-password').populate('organization').exec();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// PUT: Update user by ID
async function updateUser(req, res) {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE: Delete user by IDss
async function deleteUser(req, res) {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
