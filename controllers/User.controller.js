const UserModel = require("../models/User.model");

// get all books
async function getUsers(req, res, next) {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getUser(req, res, next) {
    try {

    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function addUser(req, res, next) {
    try {
        const { username, avatar, email } = req.body;

        const newUser = new UserModel({
            username, avatar, email
        })

        await newUser.save()

        res.status(201).json({
            success: {
                message: "Add new user",
            },
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        res.status(200).json({
          message: "Cann't delete user.",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function editUser(req, res, next) {
    try {
        const { userId } = req.params || {};
        const updateUser = await UserModel.findByIdAndUpdate(
          userId,
          { $set: req.body },
          { new: true }
        );
    
        res.status(201).json({
          message: "User information update successfull.",
          user: updateUser,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    getUser, getUsers, addUser, deleteUser, editUser
};
