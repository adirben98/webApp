const userModel = require("../Models/User");
const userService=require('./UserService')

async function login(email, password) {
    const findUser = await userModel.findOne({ email: email, password });
    return findUser != null;
}
async function register(firstName,lastName,email,password,userType) {

    const existUser= await userModel.findOne({email:email})
    if(existUser){
        return false;
    }

    await userService.createUser(firstName,lastName,email,password,userType)    
        return true
}
async function changePass(email,newPassord){
    const user=await userModel.findOne({email:email})
    userService.updateUser(user.firstName,user.lastName,email,newPassord,null)
}




module.exports = { login, register }
