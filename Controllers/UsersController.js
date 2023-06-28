const UserService = require('../Services/UserService');

const createUser = async (req,res) => {
    const newUser = await UserService.createUser(req.body.firstName,req.body.lastName,req.body.email,req.body.password);
    res.json(newUser);
}

const getUser = async (req,res) => {
    const User = await UserService.getUser(req.session.email);
    if(!User){
        return res.status(404).json({errors:['User not found']});
    }
    res.json(User);
}

const getUsers = async (req,res) => {
    const Users = await UserService.getUsers();
    res.json(Users);
}

const updateUser = async (req,res) => {
    const User = await UserService.updateUser(req.body.firstName,req.body.lastName,req.body.email,req.body.password);
    if (!User){
      return res.status(404).json({errors:['User not found']});
    }
    res.json(User);
}

const deleteUser = async (req,res) =>{
    const User = await UserService.deleteUser(req.body.email);
    if (!User){
      return res.status(404).json({errors:['User not found']});
    }
    
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}

