const UserService = require('../Services/UserService');

const createUser = async (req,res) => {
    const newUser = await UserService.createUser(req.body.firstName,req.body.lastName,req.body.email,req.body.password);
    res.json(newUser);
}

const getUserByEmail = async (req,res) => {
    const User = await UserService.getUserByEmail(req.params.email);
    if(!email){
        return res.status(404).json({errors:['User not found']});
    }
    res.json(User);
}

const getUsers = async (req,res) => {
    const Users = UserService.getUsers();
    res.json(Users);
}

const updateUser = async (req,res) => {
    if(!req.body.firstName) res.status(400).json({message:'First name is required'});
    if(!req.body.LastName) res.status(400).json({message:'Last name is required'});
    if(!req.body.email) res.status(400).json({message:'Email is required'});
    if(!req.body.password) res.status(400).json({message:'Password is required'});

    const User = await UserService.updateUser(req.body.firstName,req.body.lastName,req.body.email,req.body.password);
    if (!User){
      return res.status(404).json({errors:['User not found']});
    }
    res.json(User);
}

const deleteUser = async (req,res) =>{
    const User = await articleService.deleteUser(req.params.email);
    if (!User){
      return res.status(404).json({errors:['User not found']});
    }
    res.send();
}

module.exports = {
    createUser,
    getUserByEmail,
    getUsers,
    updateUser,
    deleteUser
}

